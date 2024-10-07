import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';
import { BlogStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/blog-status.enum';
import { CreateContentInput } from 'src/modules/content/dto/createContent.input';

@InputType()
export class CreateBlogInput {
  @Field(() => String)
  @IsNotEmpty()
  @MinLength(12)
  @MaxLength(125)
  title: string;

  @Field(() => String)
  @IsNotEmpty()
  @MinLength(12)
  @MaxLength(125)
  subtitle: string;

  @Field(() => String)
  description: string;

  @Field(() => BlogStatus)
  @IsNotEmpty()
  status: BlogStatus;

  @Field(() => String)
  @IsNotEmpty()
  authorId: string;

  @Field(() => [String], { nullable: true })
  tagIds?: string[];

  @Field(() => [CreateContentInput])
  @IsNotEmpty()
  contents: CreateContentInput[];
}
