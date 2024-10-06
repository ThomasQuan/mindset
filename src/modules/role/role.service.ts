import { Injectable } from '@nestjs/common';
import { CreateRoleInput } from './dto/createRole.input';
import { UpdateRoleInput } from './dto/updateRole.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindManyRolesInput } from './dto/findManyRoles.input';
import { User } from '../user/entities/user.entity';
import { BaseService } from '../base/base.service';
import { Role } from './entities/role.entity';
import { slugify } from 'src/utils/string/slugify';
import { Permission } from '@prisma/client';

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

  async create(data: CreateRoleInput): Promise<Role> {
    const slug = slugify(data.title);
    let role = await this.findBySlug(slug);

    if (!role) {
      const createData: any = {
        title: data.title,
        description: data.description,
        slug,
      };

      if (Array.isArray(data.userIds)) {
        createData.users =
          data.userIds.length > 0
            ? { connect: data.userIds.map((id) => ({ id })) }
            : { set: [] };
      }

      if (Array.isArray(data.permissions)) {
        createData.permissions =
          data.permissions.length > 0
            ? { connect: data.permissions.map((slug) => ({ slug })) }
            : { set: [] };
      }

      role = await this.prisma.role.create({ data: createData });
    } else {
      const updateData: any = {
        title: data.title,
        description: data.description,
      };

      if (Array.isArray(data.userIds)) {
        updateData.users =
          data.userIds.length > 0
            ? { set: data.userIds.map((id) => ({ id })) }
            : { set: [] };
      }

      if (Array.isArray(data.permissions)) {
        updateData.permissions =
          data.permissions.length > 0
            ? { set: data.permissions.map((slug) => ({ slug })) }
            : { set: [] };
      }

      role = await this.prisma.role.update({
        where: { slug },
        data: updateData,
      });
    }

    return role;
  }

  async getUsers(id: string): Promise<User[]> {
    return this.prisma.user.findMany({
      where: { roleId: id },
    });
  }

  async findBySlug(slug: string): Promise<Role | null> {
    return this.prisma.role.findUnique({
      where: { slug: slug },
    });
  }

  async getPermissions(id: string): Promise<Permission[]> {
    return this.prisma.permission.findMany({
      where: { roles: { some: { id } } },
    });
  }

  async update(id: string, data: UpdateRoleInput): Promise<Role> {
    const role = await this.prisma.role.findUnique({ where: { id } });

    if (!role) {
      throw new Error(`Role with id ${id} not found`);
    }

    const updateData: any = {
      title: data.title,
      description: data.description,
    };

    if (data.title) {
      updateData.slug = slugify(data.title);
    }

    if (Array.isArray(data.userIds)) {
      updateData.users =
        data.userIds.length > 0
          ? { set: data.userIds.map((id) => ({ id })) }
          : { set: [] };
    }

    if (Array.isArray(data.permissions)) {
      updateData.permissions =
        data.permissions.length > 0
          ? { set: data.permissions.map((slug) => ({ slug })) }
          : { set: [] };
    }

    const updatedRole = await this.prisma.role.update({
      where: { id },
      data: updateData,
    });

    return updatedRole;
  }
}
