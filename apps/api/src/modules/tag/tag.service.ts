import { Injectable } from '@nestjs/common';
import { CreateTagInput } from './dto/createTag.input';
import { UpdateTagInput } from './dto/updateTag.input';
import { BaseService } from '../base/base.service';
import { FindManyTagsInput } from './dto/findManyTags.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Blog as BlogPrisma, Project as ProjectPrisma } from '@prisma/client';
import { Tag } from 'src/@generated/prisma-nestjs-graphql/tag/tag.model';
@Injectable()
export class TagService extends BaseService<
  Tag,
  CreateTagInput,
  UpdateTagInput,
  FindManyTagsInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, 'tag', Tag);
  }

  async getBlogs(id: string): Promise<BlogPrisma[]> {
    return this.prisma.blog.findMany({
      where: {
        tags: {
          some: {
            id,
          },
        },
      },
    });
  }

  async getProjects(id: string): Promise<ProjectPrisma[]> {
    return this.prisma.project.findMany({
      where: {
        tags: {
          some: {
            id,
          },
        },
      },
    });
  }
}
