import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { BlogStatService } from './blogStat.service';
import { BlogStat } from './entities/blogStat.entity';
import { CreateBlogStatInput } from './dto/createBlogStat.input';
import { UpdateBlogStatInput } from './dto/updateBlogStat.input';
import { FindManyBlogStatsInput } from './dto/findManyBlogStat.input';

@Resolver(() => BlogStat)
export class BlogStatResolver {
  constructor(private readonly blogStatService: BlogStatService) {}

  @Mutation(() => BlogStat)
  createBlogStat(
    @Args('createBlogStatInput') createBlogStatInput: CreateBlogStatInput,
  ) {
    return this.blogStatService.create(createBlogStatInput);
  }

  @Query(() => [BlogStat], { name: 'blogStat' })
  blogStats(
    @Args('params', { nullable: true }) params?: FindManyBlogStatsInput,
  ) {
    return this.blogStatService.findMany(params);
  }

  @Query(() => BlogStat, { name: 'blogStat' })
  blogStat(@Args('id', { type: () => ID }) id: string) {
    return this.blogStatService.findOne(id);
  }

  @Mutation(() => BlogStat)
  updateBlogStat(
    @Args('updateBlogStatInput') updateBlogStatInput: UpdateBlogStatInput,
  ) {
    return this.blogStatService.update(
      updateBlogStatInput.id,
      updateBlogStatInput,
    );
  }

  @Mutation(() => BlogStat)
  deleteBlogStat(@Args('id', { type: () => ID }) id: string) {
    return this.blogStatService.delete(id);
  }
}
