import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { BlogStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/blog-status.enum';
import { BlogStat } from 'src/modules/blogStat/entities/blogStat.entity';
import { Content } from 'src/modules/content/entities/content.entity';
import { Tag } from 'src/modules/tag/entities/tag.entity';
import { User } from 'src/modules/user/entities/user.entity';
import { BlogStatus as BlogStatusPrisma } from '@prisma/client';
@ObjectType()
export class Blog {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  subtitle: string;

  @Field(() => String)
  description: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => Boolean)
  hasEdited: boolean;

  @Field(() => User)
  author: User;

  @Field(() => String)
  authorId: string;

  @Field(() => [Tag])
  tags: Tag[];

  @Field(() => [Content])
  contents: Content[];

  @Field(() => BlogStat)
  blogStat: BlogStat;

  @Field(() => BlogStatus)
  status: BlogStatusPrisma;
}
