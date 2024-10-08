import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BlogStatWhereUniqueInput } from './blog-stat-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBlogStatArgs {

    @Field(() => BlogStatWhereUniqueInput, {nullable:false})
    @Type(() => BlogStatWhereUniqueInput)
    where!: Prisma.AtLeast<BlogStatWhereUniqueInput, 'id' | 'blogId'>;
}
