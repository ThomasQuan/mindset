import {
  ObjectType,
  Field,
  Int,
  GraphQLISODateTime,
  ID,
} from '@nestjs/graphql';
import { Slug } from 'src/decorators/slug';
import { Blog } from 'src/modules/blog/entities/blog.entity';
import { Project } from 'src/modules/project/entities/project.entity';

@ObjectType()
export class Tag {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  @Slug('title')
  slug: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => String, { nullable: true })
  color: string;

  @Field(() => String, { nullable: true })
  category: string;

  @Field(() => Int, { nullable: true })
  categoryOrder: number;

  @Field(() => Int, { nullable: true })
  tagOrder: number;

  @Field(() => [Blog])
  blogs: Blog[];

  @Field(() => [Project])
  projects: Project[];
}
