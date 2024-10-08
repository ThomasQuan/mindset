import { IsOptional, IsNumber, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InputType, Field, Int } from '@nestjs/graphql';
import { RoleWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/role/role-where-unique.input';

@InputType()
export class FindManyRolesInput {
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

  @Field(() => RoleWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  cursor?: Prisma.RoleWhereUniqueInput;

  @Field(() => RoleWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  where?: Prisma.RoleWhereInput;

  @Field(() => RoleWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  orderBy?: Prisma.RoleOrderByWithRelationInput;
}
