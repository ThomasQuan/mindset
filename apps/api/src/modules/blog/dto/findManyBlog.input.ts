import { IsOptional, IsNumber, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InputType, Field, Int } from '@nestjs/graphql';
import { BlogWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/blog/blog-where-unique.input';

@InputType()
export class FindManyBlogsInput {
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

  @Field(() => BlogWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  cursor?: Prisma.BlogWhereUniqueInput;

  @Field(() => BlogWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  where?: Prisma.BlogWhereInput;

  @Field(() => BlogWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  orderBy?: Prisma.BlogOrderByWithRelationInput;
}
