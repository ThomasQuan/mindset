import { InputType, Field } from '@nestjs/graphql';
import { BlogStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/blog-status.enum';
import { CreateContentInput } from 'src/modules/content/dto/createContent.input';

@InputType()
export class CreateBlogInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  subtitle: string;

  @Field(() => String)
  description: string;

  @Field(() => BlogStatus)
  status: BlogStatus;

  @Field(() => String)
  authorId: string;

  @Field(() => [String])
  tagIds: string[];

  @Field(() => [CreateContentInput])
  contents: CreateContentInput[];
}
