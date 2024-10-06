import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { BlogService } from './blog.service';
import { Blog } from './entities/blog.entity';
import { CreateBlogInput } from './dto/createBlog.input';
import { UpdateBlogInput } from './dto/updateBlog.input';
import { FindManyBlogsInput } from './dto/findManyBlog.input';

@Resolver(() => Blog)
export class BlogResolver {
  constructor(private readonly blogService: BlogService) {}

  @Mutation(() => Blog)
  createBlog(@Args('createBlogInput') createBlogInput: CreateBlogInput) {
    return this.blogService.create(createBlogInput);
  }

  @Query(() => [Blog], { name: 'blog' })
  roles(@Args('findManyBlogsInput') findManyBlogsInput: FindManyBlogsInput) {
    return this.blogService.findMany(findManyBlogsInput);
  }

  @Query(() => Blog, { name: 'blog' })
  role(@Args('id', { type: () => ID }) id: string) {
    return this.blogService.findOne(id);
  }

  @Mutation(() => Blog)
  updateBlog(@Args('updateBlogInput') updateBlogInput: UpdateBlogInput) {
    return this.blogService.update(updateBlogInput.id, updateBlogInput);
  }

  @Mutation(() => Blog)
  deleteBlog(@Args('id', { type: () => ID }) id: string) {
    return this.blogService.delete(id);
  }
}
