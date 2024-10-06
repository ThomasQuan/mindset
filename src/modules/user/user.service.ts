import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/createUser.input';
import { UpdateUserInput } from './dto/updateUser.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';
import { FindManyUsersInput } from './dto/findManyUser.input';
import { Role } from '../role/entities/role.entity';
import { BaseService } from '../base/base.service';

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
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

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
