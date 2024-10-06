import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { RoleService } from './role.service';
import { Role } from './entities/role.entity';
import { CreateRoleInput } from './dto/createRole.input';
import { UpdateRoleInput } from './dto/updateRole.input';
import { FindManyRolesInput } from './dto/findManyRoles.input';
import { User } from '../user/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { Permission } from 'src/decorators/permission';
import { Permission as PermissionGraphQL } from 'src/@generated/prisma-nestjs-graphql/permission/permission.model';

@Resolver(() => Role)
@UseGuards(RolesGuard)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Mutation(() => Role)
  @Permission(['read', 'role'])
  async roles(
    @Args('params', { nullable: true }) params?: FindManyRolesInput,
  ): Promise<Role[]> {
    return this.roleService.findMany(params);
  }

  @Query(() => Role, { nullable: true })
  @Permission(['read', 'role'])
  async role(@Args('id', { type: () => ID }) id: string): Promise<Role | null> {
    return this.roleService.findOne(id);
  }

  @Mutation(() => Role)
  @Permission(['create', 'role'])
  async createRole(
    @Args('createRoleInput') createRoleInput: CreateRoleInput,
  ): Promise<Role> {
    return this.roleService.create(createRoleInput);
  }

  @Mutation(() => Role)
  @Permission(['update', 'role'])
  async updateRole(
    @Args('updateRoleInput') updateRoleInput: UpdateRoleInput,
  ): Promise<Role> {
    return this.roleService.update(updateRoleInput.id, updateRoleInput);
  }

  @Mutation(() => Role)
  @Permission(['delete', 'role'])
  async deleteRole(@Args('id', { type: () => ID }) id: string): Promise<Role> {
    return this.roleService.delete(id);
  }

  // --- RESOLVE FIELDS ---

  @ResolveField(() => [User])
  async users(@Parent() role: Role): Promise<User[]> {
    return this.roleService.getUsers(role.id);
  }

  @ResolveField(() => [Permission])
  async permissions(@Parent() role: Role): Promise<PermissionGraphQL[]> {
    return this.roleService.getPermissions(role.id);
  }
}
