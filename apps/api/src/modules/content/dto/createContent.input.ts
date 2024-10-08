import { InputType, Int, Field } from '@nestjs/graphql';
import { ContentStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/content-status.enum';

@InputType()
export class CreateContentInput {
  @Field(() => String)
  slug: string;

  @Field(() => String)
  markdownContent: string;

  @Field(() => String)
  htmlContent: string;

  @Field(() => ContentStatus)
  status: ContentStatus;

  @Field(() => Int)
  orderNo: number;

  @Field(() => String)
  objectAs: string;
}
