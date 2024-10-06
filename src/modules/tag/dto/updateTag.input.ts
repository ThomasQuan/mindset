import { IsNotEmpty } from 'class-validator';
import { CreateTagInput } from './createTag.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTagInput extends PartialType(CreateTagInput) {
  @Field(() => String)
  @IsNotEmpty()
  id: string;

  @Field(() => String)
  @IsNotEmpty()
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  color: string;

  @Field(() => String)
  category: string;

  @Field(() => Int)
  categoryOrder: number;

  @Field(() => Int)
  tagOrder: number;
}
