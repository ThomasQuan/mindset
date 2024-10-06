import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { BlogService } from './blog.service';
import { Blog } from './entities/blog.entity';
import { CreateBlogInput } from './dto/createBlog.input';
import { UpdateBlogInput } from './dto/updateBlog.input';
import { FindManyBlogsInput } from './dto/findManyBlog.input';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { Permission } from 'src/decorators/permission';
import { User } from '../user/entities/user.entity';

@Resolver(() => Blog)
@UseGuards(RolesGuard)
export class BlogResolver {
  constructor(private readonly blogService: BlogService) {}

  @Mutation(() => Blog)
  @Permission(['create', 'blog'])
  createBlog(@Args('createBlogInput') createBlogInput: CreateBlogInput) {
    return this.blogService.create(createBlogInput);
  }

  @Query(() => [Blog], { name: 'blogs' })
  @Permission(['read', 'blog'])
  blogs(
    @Args('findManyBlogsInput', { nullable: true })
    findManyBlogsInput?: FindManyBlogsInput,
  ) {
    return this.blogService.findMany(findManyBlogsInput);
  }

  @Query(() => Blog, { name: 'blog' })
  @Permission(['read', 'blog'])
  role(@Args('id', { type: () => ID }) id: string) {
    return this.blogService.findOne(id);
  }

  @Mutation(() => Blog)
  @Permission(['update', 'blog'])
  updateBlog(@Args('updateBlogInput') updateBlogInput: UpdateBlogInput) {
    return this.blogService.update(updateBlogInput.id, updateBlogInput);
  }

  @Mutation(() => Blog)
  @Permission(['delete', 'blog'])
  deleteBlog(@Args('id', { type: () => ID }) id: string) {
    return this.blogService.delete(id);
  }

  @ResolveField(() => User)
  author(@Parent() blog: Blog) {
    return this.blogService.getAuthor(blog.authorId);
  }

  @ResolveField(() => User)
  contents(@Parent() blog: Blog) {
    return this.blogService.getContents(blog.authorId);
  }
}
