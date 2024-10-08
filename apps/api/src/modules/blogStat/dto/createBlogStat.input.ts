import { InputType, Int, Field, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateBlogStatInput {
  @Field(() => ID)
  @IsString()
  @IsNotEmpty()
  blogId: string;

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  likedCount: number;

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  dislikedCount: number;

  @Field(() => Int)
  @IsNumber()
  @IsNotEmpty()
  visitedCount: number;
}
