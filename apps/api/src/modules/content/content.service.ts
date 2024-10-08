import { Injectable } from '@nestjs/common';
import { CreateContentInput } from './dto/createContent.input';
import { UpdateContentInput } from './dto/updateContent.input';
import { BaseService } from '../base/base.service';
import { FindManyContentsInput } from './dto/findManyContents.input';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  Project as ProjectPrisma,
  Asset as AssetPrisma,
  Blog as BlogPrisma,
} from '@prisma/client';
import { Content } from 'src/@generated/prisma-nestjs-graphql/content/content.model';
@Injectable()
export class ContentService extends BaseService<
  Content,
  CreateContentInput,
  UpdateContentInput,
  FindManyContentsInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, 'content', Content);
  }

  async getProject(id: string): Promise<ProjectPrisma> {
    const content = await this.prisma.content.findFirst({
      where: {
        id,
      },
      include: {
        project: true,
      },
    });
    return content.project;
  }

  async getAssets(id: string): Promise<AssetPrisma[]> {
    const content = await this.prisma.content.findFirst({
      where: {
        id,
      },
      include: {
        assets: true,
      },
    });
    return content.assets;
  }

  async getBlog(id: string): Promise<BlogPrisma> {
    const content = await this.prisma.content.findFirst({
      where: {
        id,
      },
      include: {
        blog: true,
      },
    });
    return content.blog;
  }
}
