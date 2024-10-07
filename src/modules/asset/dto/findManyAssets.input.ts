import { IsOptional, IsNumber, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InputType, Field, Int } from '@nestjs/graphql';
import { AssetWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/asset/asset-where-unique.input';

@InputType()
export class FindManyAssetsInput {
  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  skip?: number;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  take?: number;

  @Field(() => AssetWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  cursor?: Prisma.AssetWhereUniqueInput;

  @Field(() => AssetWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  where?: Prisma.AssetWhereInput;

  @Field(() => AssetWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  orderBy?: Prisma.AssetOrderByWithRelationInput;
}
