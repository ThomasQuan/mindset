import { IsOptional, IsNumber, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InputType, Field, Int } from '@nestjs/graphql';
import { TagWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/tag/tag-where-unique.input';

@InputType()
export class FindManyTagsInput {
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

  @Field(() => TagWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  cursor?: Prisma.TagWhereUniqueInput;

  @Field(() => TagWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  where?: Prisma.TagWhereInput;

  @Field(() => TagWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  orderBy?: Prisma.TagOrderByWithRelationInput;
}
