import { InputType, Field } from '@nestjs/graphql';
import { BlogStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/blog-status.enum';
import { UpdateContentInput } from 'src/modules/content/dto/updateContent.input';

@InputType()
export class UpdateBlogInput {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => BlogStatus, { nullable: true })
  status?: BlogStatus;

  @Field(() => String, { nullable: true })
  subtitle?: string;

  @Field(() => [String], { nullable: true })
  tagIds?: string[];

  @Field(() => [UpdateContentInput], { nullable: true })
  contents?: UpdateContentInput[];
}
