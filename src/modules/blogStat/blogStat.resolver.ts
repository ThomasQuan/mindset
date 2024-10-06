import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { BlogStatService } from './blogStat.service';
import { BlogStat } from './entities/blogStat.entity';
import { CreateBlogStatInput } from './dto/createBlogStat.input';
import { UpdateBlogStatInput } from './dto/updateBlogStat.input';
import { FindManyBlogStatsInput } from './dto/findManyBlogStat.input';
import { RolesGuard } from 'src/auth/guard/role.guard';
import { UseGuards } from '@nestjs/common';
import { Permission } from 'src/decorators/permission';

@Resolver(() => BlogStat)
@UseGuards(RolesGuard)
export class BlogStatResolver {
  constructor(private readonly blogStatService: BlogStatService) {}

  @Mutation(() => BlogStat)
  @Permission(['create', 'blogStat'])
  createBlogStat(
    @Args('createBlogStatInput') createBlogStatInput: CreateBlogStatInput,
  ) {
    return this.blogStatService.create(createBlogStatInput);
  }

  @Query(() => [BlogStat], { name: 'blogStat' })
  @Permission(['read', 'blogStat'])
  blogStats(
    @Args('params', { nullable: true }) params?: FindManyBlogStatsInput,
  ) {
    return this.blogStatService.findMany(params);
  }

  @Query(() => BlogStat, { name: 'blogStat' })
  @Permission(['read', 'blogStat'])
  blogStat(@Args('id', { type: () => ID }) id: string) {
    return this.blogStatService.findOne(id);
  }

  @Mutation(() => BlogStat)
  @Permission(['update', 'blogStat'])
  updateBlogStat(
    @Args('updateBlogStatInput') updateBlogStatInput: UpdateBlogStatInput,
  ) {
    return this.blogStatService.update(
      updateBlogStatInput.id,
      updateBlogStatInput,
    );
  }

  @Mutation(() => BlogStat)
  @Permission(['delete', 'blogStat'])
  deleteBlogStat(@Args('id', { type: () => ID }) id: string) {
    return this.blogStatService.delete(id);
  }
}
