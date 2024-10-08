import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/createProject.input';
import { UpdateProjectInput } from './dto/updateProject.input';
import { BaseService } from '../base/base.service';
import { FindManyProjectsInput } from './dto/findManyProject.input';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  User as UserPrisma,
  Tag as TagPrisma,
  Content as ContentPrisma,
} from '@prisma/client';
import { Project } from 'src/@generated/prisma-nestjs-graphql/project/project.model';
@Injectable()
export class ProjectService extends BaseService<
  Project,
  CreateProjectInput,
  UpdateProjectInput,
  FindManyProjectsInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, 'project', Project);
  }

  async getAuthor(id: string): Promise<UserPrisma> {
    const project = await this.prisma.project.findUnique({
      where: {
        id,
      },
      include: {
        author: true,
      },
    });
    return project.author;
  }

  async getTags(id: string): Promise<TagPrisma[]> {
    return this.prisma.tag.findMany({
      where: {
        projects: {
          some: {
            id,
          },
        },
      },
    });
  }

  async getContents(id: string): Promise<ContentPrisma[]> {
    return this.prisma.content.findMany({
      where: {
        projectId: id,
      },
    });
  }
}
