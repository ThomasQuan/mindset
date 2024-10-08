import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreateAssetInput } from './createAsset.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { Type } from 'class-transformer';

@InputType()
export class UpdateAssetInput extends PartialType(CreateAssetInput) {
  @Field(() => ID)
  @IsNotEmpty()
  id: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  name?: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  url?: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  width?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  height?: number;

  @Field(() => String, { nullable: true })
  @IsOptional()
  resolution?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  contentIds?: string[];
}
