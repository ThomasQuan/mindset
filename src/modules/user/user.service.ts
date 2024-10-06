import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/createUser.input';
import { UpdateUserInput } from './dto/updateUser.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entities/user.entity';
import { FindManyUsersInput } from './dto/findManyUser.input';
import { Role } from '../role/entities/role.entity';
import { BaseService } from '../base/base.service';
import * as bcrypt from 'bcrypt';

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

  /**
   * Create a new user
   * Bcrypt the password is password is provided
   * @param data - The data for the user to create
   * @returns The created user
   */
  async create(data: CreateUserInput): Promise<User> {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }
    return super.create(data);
  }
}
