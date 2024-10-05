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
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/createUser.input';
import { UpdateUserInput } from './dto/updateUser.input';
import { FindManyUsersInput } from './dto/findManyUser.input';
import { Role } from '../role/entities/role.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(
    @Args('params', { nullable: true }) params?: FindManyUsersInput,
  ): Promise<User[]> {
    return this.userService.findMany(params);
  }

  @Query(() => User, { nullable: true })
  async user(@Args('id', { type: () => ID }) id: string): Promise<User | null> {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserInput') createUserInput: CreateUserInput,
  ): Promise<User> {
    return this.userService.create(createUserInput);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): Promise<User> {
    return this.userService.update(id, updateUserInput);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id', { type: () => ID }) id: string): Promise<User> {
    return this.userService.delete(id);
  }

  //  --- RESOLVE FIELDS ---

  @ResolveField(() => Role)
  async role(@Parent() user: User): Promise<Role> {
    return this.userService.getRole(user.id);
  }
}
