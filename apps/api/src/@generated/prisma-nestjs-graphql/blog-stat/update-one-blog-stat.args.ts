import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogStatUpdateInput } from './blog-stat-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BlogStatWhereUniqueInput } from './blog-stat-where-unique.input';

@ArgsType()
export class UpdateOneBlogStatArgs {

    @Field(() => BlogStatUpdateInput, {nullable:false})
    @Type(() => BlogStatUpdateInput)
    data!: BlogStatUpdateInput;

    @Field(() => BlogStatWhereUniqueInput, {nullable:false})
    @Type(() => BlogStatWhereUniqueInput)
    where!: Prisma.AtLeast<BlogStatWhereUniqueInput, 'id' | 'blogId'>;
}
