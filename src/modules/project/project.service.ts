import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/createProject.input';
import { UpdateProjectInput } from './dto/updateProject.input';
import { BaseService } from '../base/base.service';
import { FindManyProjectsInput } from './dto/findManyProject.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Project } from './entities/project.entity';

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
}
