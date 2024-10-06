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

@Resolver(() => Role)
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(() => [Role])
  async roles(
    @Args('params', { nullable: true }) params?: FindManyRolesInput,
  ): Promise<Role[]> {
    return this.roleService.findMany(params);
  }

  @Query(() => Role, { nullable: true })
  async role(@Args('id', { type: () => ID }) id: string): Promise<Role | null> {
    return this.roleService.findOne(id);
  }

  @Mutation(() => Role)
  async createRole(
    @Args('createUserInput') createUserInput: CreateRoleInput,
  ): Promise<Role> {
    return this.roleService.create(createUserInput);
  }

  @Mutation(() => Role)
  async updateRole(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateUserInput') updateUserInput: UpdateRoleInput,
  ): Promise<Role> {
    return this.roleService.update(id, updateUserInput);
  }

  @Mutation(() => Role)
  async deleteRole(@Args('id', { type: () => ID }) id: string): Promise<Role> {
    return this.roleService.delete(id);
  }

  // --- RESOLVE FIELDS ---

  @ResolveField(() => [User])
  async users(@Parent() role: Role): Promise<User[]> {
    return this.roleService.getUsers(role.id);
  }
}
