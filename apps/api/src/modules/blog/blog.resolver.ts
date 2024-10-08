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
import { CreateBlogInput } from './dto/createBlog.input';
import { UpdateBlogInput } from './dto/updateBlog.input';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { Permission } from 'src/decorators/permission';
import { Content } from 'src/@generated/prisma-nestjs-graphql/content/content.model';
import { BlogStat } from 'src/@generated/prisma-nestjs-graphql/blog-stat/blog-stat.model';
import { Tag } from 'src/@generated/prisma-nestjs-graphql/tag/tag.model';
import { Blog } from 'src/@generated/prisma-nestjs-graphql/blog/blog.model';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';
import { FindManyBlogsInput } from './dto/findManyBlog.input';

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
    return this.blogService.getAuthor(blog.id);
  }

  @ResolveField(() => Content)
  contents(@Parent() blog: Blog) {
    return this.blogService.getContents(blog.id);
  }

  @ResolveField(() => BlogStat)
  blogStat(@Parent() blog: Blog) {
    return this.blogService.getBlogStat(blog.id);
  }

  @ResolveField(() => Tag)
  tags(@Parent() blog: Blog) {
    return this.blogService.getTags(blog.id);
  }
}
