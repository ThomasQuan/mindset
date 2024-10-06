import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Blog } from 'src/modules/blog/entities/blog.entity';

@ObjectType()
export class BlogStat {
  @Field(() => ID)
  id: string;

  @Field(() => Int)
  likedCount: number;

  @Field(() => Int)
  dislikedCount: number;

  @Field(() => Int)
  visitedCount: number;

  @Field(() => Blog)
  blog: Blog;

  @Field(() => String)
  blogId: string;
}
