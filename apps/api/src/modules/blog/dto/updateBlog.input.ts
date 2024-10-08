import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { BlogStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/blog-status.enum';
import { UpdateContentInput } from 'src/modules/content/dto/updateContent.input';

@InputType()
export class UpdateBlogInput {
  @Field(() => String)
  @IsNotEmpty()
  id: string;

  @Field(() => String, { nullable: true })
  @MinLength(12)
  @MaxLength(125)
  title?: string;

  @Field(() => String, { nullable: true })
  @MinLength(12)
  @MaxLength(125)
  subtitle?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => BlogStatus, { nullable: true })
  status?: BlogStatus;

  @Field(() => [String], { nullable: true })
  tagIds?: string[];

  @Field(() => [UpdateContentInput], { nullable: true })
  contents?: UpdateContentInput[];
}
