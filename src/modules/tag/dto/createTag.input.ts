import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTagInput {
  @Field(() => String)
  @IsNotEmpty()
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  color: string;

  @Field(() => String)
  @IsNotEmpty()
  category: string;

  @Field(() => Int)
  categoryOrder: number;

  @Field(() => Int)
  tagOrder: number;
}
