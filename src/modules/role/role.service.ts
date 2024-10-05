import { Injectable } from '@nestjs/common';
import { CreateRoleInput } from './dto/createRole.input';
import { UpdateRoleInput } from './dto/updateRole.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from './entities/role.entity';
import { FindManyRolesInput } from './dto/findManyRoles.input';
import { slugify } from 'src/utils/string/slugify';

@Injectable()
export class RoleService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany(params: FindManyRolesInput = {}): Promise<Role[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.role.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(id: string): Promise<Role | null> {
    return this.prisma.role.findUnique({
      where: { id },
      include: { users: true },
    });
  }

  async create(data: CreateRoleInput): Promise<Role> {
    const slug = slugify(data.title);
    return this.prisma.role.create({
      data: {
        ...data,
        slug,
      },
      include: { users: true },
    });
  }

  async update(id: string, data: UpdateRoleInput): Promise<Role> {
    return this.prisma.role.update({
      where: { id },
      data,
      include: { users: true },
    });
  }

  async delete(id: string): Promise<Role> {
    return this.prisma.role.delete({
      where: { id },
      include: { users: true },
    });
  }
}
