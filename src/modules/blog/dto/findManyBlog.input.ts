import { IsOptional, IsNumber, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InputType, Field, Int } from '@nestjs/graphql';

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

  @Field(() => Object, { nullable: true })
  @IsOptional()
  @IsObject()
  cursor?: Prisma.BlogWhereUniqueInput;

  @Field(() => Object, { nullable: true })
  @IsOptional()
  @IsObject()
  where?: Prisma.BlogWhereInput;

  @Field(() => Object, { nullable: true })
  @IsOptional()
  @IsObject()
  orderBy?: Prisma.BlogOrderByWithRelationInput;
}
