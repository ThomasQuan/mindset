import { ObjectType, Field, ID, Int } from '@nestjs/graphql';
import { ContentStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/content-status.enum';
import { Asset } from 'src/modules/asset/entities/asset.entity';
import { Blog } from 'src/modules/blog/entities/blog.entity';
import { Project } from 'src/modules/project/entities/project.entity';
import { ContentStatus as ContentStatusPrisma } from '@prisma/client';
import { Slug } from 'src/decorators/slug';

@ObjectType()
export class Content {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  @Slug('title')
  slug: string;

  @Field(() => String)
  markdownContent: string;

  @Field(() => String)
  htmlContent: string;

  @Field(() => ContentStatus)
  status: ContentStatusPrisma;

  @Field(() => Int)
  orderNo: number;

  @Field(() => String)
  objectAs: string;

  @Field(() => Blog)
  blog: Blog;

  @Field(() => String)
  blogId: string;

  @Field(() => Project)
  project: Project;

  @Field(() => String)
  projectId: string;

  @Field(() => [Asset])
  assets: Asset[];
}
