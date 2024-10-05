import { IsOptional, IsNumber, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InputType, Field, Int } from '@nestjs/graphql';
import { UserWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/user/user-where-unique.input';

@InputType()
export class FindManyUsersInput {
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

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  cursor?: Prisma.UserWhereUniqueInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  where?: Prisma.UserWhereInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  orderBy?: Prisma.UserOrderByWithRelationInput;
}
