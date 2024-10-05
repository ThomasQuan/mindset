import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/createUser.input';
import { UpdateUserInput } from './dto/updateUser.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';
import { FindManyUsersInput } from './dto/findManyUser.input';
import { Role } from '../role/entities/role.entity';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findMany(params: FindManyUsersInput = {}): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id },
    });
  }

  async create(data: CreateUserInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async update(id: string, data: UpdateUserInput): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
      include: {
        role: true,
        blogs: true,
        projects: true,
      },
    });
  }

  async delete(id: string): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  //  --- RESOLVE FIELDS ---

  async getRole(id: string): Promise<Role | null> {
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
