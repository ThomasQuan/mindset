import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UserService } from './user.service';
import { CreateUserInput } from './dto/createUser.input';
import { UpdateUserInput } from './dto/updateUser.input';
import { FindManyUsersInput } from './dto/findManyUser.input';
import { Role as RolePrisma } from '@prisma/client';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { UseGuards } from '@nestjs/common';
import { Permission } from 'src/decorators/permission';
import { Blog as BlogPrisma, Project as ProjectPrisma } from '@prisma/client';
import { Role } from 'src/@generated/prisma-nestjs-graphql/role/role.model';
import { Project } from 'src/@generated/prisma-nestjs-graphql/project/project.model';
import { Blog } from 'src/@generated/prisma-nestjs-graphql/blog/blog.model';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';

@Resolver(() => User)
@UseGuards(RolesGuard)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  @Permission(['read', 'user'])
  async users(
    @Args('params', { nullable: true }) params?: FindManyUsersInput,
  ): Promise<User[]> {
    return this.userService.findMany(params);
  }

  @Query(() => User, { nullable: true })
  @Permission(['read', 'user'])
  async user(@Args('id', { type: () => ID }) id: string): Promise<User | null> {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  @Permission(['create', 'user'])
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.userService.create(createUserInput);
  }

  @Mutation(() => User)
  @Permission(['update', 'user'])
  async updateUser(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation(() => User)
  @Permission(['delete', 'user'])
  async deleteUser(@Args('id', { type: () => ID }) id: string): Promise<User> {
    return this.userService.delete(id);
  }

  //  --- RESOLVE FIELDS ---

  @ResolveField(() => Role)
  @Permission(['read', 'role'])
  async role(@Parent() user: User): Promise<RolePrisma> {
    return this.userService.getRole(user.id);
  }

  @ResolveField(() => [Blog])
  @Permission(['read', 'blog'])
  async blogs(@Parent() user: User): Promise<BlogPrisma[]> {
    return this.userService.getBlogs(user.id);
  }

  @ResolveField(() => [Project])
  @Permission(['read', 'project'])
  async projects(@Parent() user: User): Promise<ProjectPrisma[]> {
    return this.userService.getProjects(user.id);
  }
}
