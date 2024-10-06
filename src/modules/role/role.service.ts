import { Injectable } from '@nestjs/common';
import { CreateRoleInput } from './dto/createRole.input';
import { UpdateRoleInput } from './dto/updateRole.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindManyRolesInput } from './dto/findManyRoles.input';
import { User } from '../user/entities/user.entity';
import { BaseService } from '../base/base.service';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService extends BaseService<
  Role,
  CreateRoleInput,
  UpdateRoleInput,
  FindManyRolesInput
> {
  constructor(prisma: PrismaService) {
    super(prisma, 'role', Role);
  }

  async getUsers(id: string): Promise<User[]> {
    return this.prisma.user.findMany({
      where: { roleId: id },
    });
  }
}
