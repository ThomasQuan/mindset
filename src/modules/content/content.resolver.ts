import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ContentService } from './content.service';
import { CreateContentInput } from './dto/createContent.input';
import { UpdateContentInput } from './dto/updateContent.input';
import { FindManyContentsInput } from './dto/findManyContents.input';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { Permission } from 'src/decorators/permission';
import { Project } from 'src/@generated/prisma-nestjs-graphql/project/project.model';
import {
  Project as ProjectPrisma,
  Asset as AssetPrisma,
  Blog as BlogPrisma,
} from '@prisma/client';
import { Asset } from 'src/@generated/prisma-nestjs-graphql/asset/asset.model';
import { Blog } from 'src/@generated/prisma-nestjs-graphql/blog/blog.model';
import { Content } from 'src/@generated/prisma-nestjs-graphql/content/content.model';

@Resolver(() => Content)
@UseGuards(RolesGuard)
export class ContentResolver {
  constructor(private readonly contentService: ContentService) {}

  @Mutation(() => Content)
  @Permission(['create', 'content'])
  createContent(
    @Args('createContentInput') createContentInput: CreateContentInput,
  ) {
    return this.contentService.create(createContentInput);
  }

  @Query(() => [Content], { name: 'content' })
  @Permission(['read', 'content'])
  contents(@Args('params', { nullable: true }) params?: FindManyContentsInput) {
    return this.contentService.findMany(params);
  }

  @Query(() => Content, { name: 'content' })
  @Permission(['read', 'content'])
  content(@Args('id', { type: () => ID }) id: string) {
    return this.contentService.findOne(id);
  }

  @Mutation(() => Content)
  @Permission(['update', 'content'])
  updateContent(
    @Args('updateContentInput') updateContentInput: UpdateContentInput,
  ) {
    return this.contentService.update(
      updateContentInput.id,
      updateContentInput,
    );
  }

  @Mutation(() => Content)
  @Permission(['delete', 'content'])
  deleteContent(@Args('id', { type: () => ID }) id: string) {
    return this.contentService.delete(id);
  }

  @ResolveField(() => Project)
  async project(@Parent() content: Content): Promise<ProjectPrisma> {
    return this.contentService.getProject(content.id);
  }

  @ResolveField(() => [Asset])
  async assets(@Parent() content: Content): Promise<AssetPrisma[]> {
    return this.contentService.getAssets(content.id);
  }

  @ResolveField(() => Blog)
  async blog(@Parent() content: Content): Promise<BlogPrisma> {
    return this.contentService.getBlog(content.id);
  }
}
