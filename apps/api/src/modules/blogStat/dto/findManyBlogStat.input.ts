import { IsOptional, IsNumber, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InputType, Field, Int } from '@nestjs/graphql';
import { BlogStatWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/blog-stat/blog-stat-where-unique.input';

@InputType()
export class FindManyBlogStatsInput {
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

  @Field(() => BlogStatWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  cursor?: Prisma.BlogStatWhereUniqueInput;

  @Field(() => BlogStatWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  where?: Prisma.BlogStatWhereInput;

  @Field(() => BlogStatWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  orderBy?: Prisma.BlogStatOrderByWithRelationInput;
}
