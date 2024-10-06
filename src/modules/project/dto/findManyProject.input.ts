import { IsOptional, IsNumber, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { InputType, Field, Int } from '@nestjs/graphql';
import { ProjectWhereUniqueInput } from 'src/@generated/prisma-nestjs-graphql/project/project-where-unique.input';

@InputType()
export class FindManyProjectsInput {
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

  @Field(() => ProjectWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  cursor?: Prisma.ProjectWhereUniqueInput;

  @Field(() => ProjectWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  where?: Prisma.ProjectWhereInput;

  @Field(() => ProjectWhereUniqueInput, { nullable: true })
  @IsOptional()
  @IsObject()
  orderBy?: Prisma.ProjectOrderByWithRelationInput;
}
