import { Resolver, ResolveField, Parent } from '@nestjs/graphql';
import { ContentService } from './content.service';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/guard/role.guard';
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
