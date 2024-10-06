import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateBlogStatInput } from './createBlogStat.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateBlogStatInput extends PartialType(CreateBlogStatInput) {
  @Field(() => ID)
  id: string;

  @Field(() => ID)
  @IsString()
  @IsNotEmpty()
  blogId: string;

  @Field(() => Int)
  @IsNumber()
  likedCount: number;

  @Field(() => Int)
  @IsNumber()
  dislikedCount: number;

  @Field(() => Int)
  @IsNumber()
  visitedCount: number;
}
