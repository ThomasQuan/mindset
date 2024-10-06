import { IsOptional, IsNumber, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InputType, Field, Int } from '@nestjs/graphql';
import { ContentWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/content/content-where-unique.input';

@InputType()
export class FindManyContentsInput {
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

  @Field(() => ContentWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  cursor?: Prisma.ContentWhereUniqueInput;

  @Field(() => ContentWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  where?: Prisma.ContentWhereInput;

  @Field(() => ContentWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  orderBy?: Prisma.ContentOrderByWithRelationInput;
}
