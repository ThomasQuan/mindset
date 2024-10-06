import { ContentStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/content-status.enum';
import { CreateContentInput } from './createContent.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateContentInput extends PartialType(CreateContentInput) {
  @Field(() => String)
  id: string;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  slug?: string;

  @Field(() => String, { nullable: true })
  markdownContent?: string;

  @Field(() => String, { nullable: true })
  htmlContent?: string;

  @Field(() => ContentStatus, { nullable: true })
  status?: ContentStatus;

  @Field(() => Int, { nullable: true })
  orderNo?: number;

  @Field(() => String, { nullable: true })
  objectAs?: string;
}
