import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ContentService } from './content.service';
import { Content } from './entities/content.entity';
import { CreateContentInput } from './dto/createContent.input';
import { UpdateContentInput } from './dto/updateContent.input';
import { FindManyContentsInput } from './dto/findManyContents.input';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { Permission } from 'src/decorators/permission';

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
}
