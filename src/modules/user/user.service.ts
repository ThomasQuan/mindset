import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/createUser.input';
import { UpdateUserInput } from './dto/updateUser.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindManyUsersInput } from './dto/findManyUser.input';
import { BaseService } from '../base/base.service';
import * as bcrypt from 'bcrypt';
import {
  Blog as BlogPrisma,
  Project as ProjectPrisma,
  Role as RolePrisma,
} from '@prisma/client';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';

@Injectable()
export class UserService extends BaseService<
  User,
  CreateUserInput,
  UpdateUserInput,
  FindManyUsersInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, 'user', User);
  }

  async findByEmail(email: string): Promise<User | null> {
    console.log('Find by email', email);
    return this.prisma.user.findUnique({
      where: { email: email },
    });
  }

  async create(data: CreateUserInput): Promise<User> {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return super.create(data);
  }

  async getBlogs(id: string): Promise<BlogPrisma[]> {
    return this.prisma.blog.findMany({
      where: {
        authorId: id,
      },
    });
  }

  async getProjects(id: string): Promise<ProjectPrisma[]> {
    return this.prisma.project.findMany({
      where: {
        authorId: id,
      },
    });
  }

  async getRole(id: string): Promise<RolePrisma | null> {
    return this.prisma.role.findFirst({
      where: {
        users: {
          some: {
            id: id,
          },
        },
      },
    });
  }
}
