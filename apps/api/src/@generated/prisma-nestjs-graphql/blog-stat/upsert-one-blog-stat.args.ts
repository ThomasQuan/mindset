import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BlogStatWhereUniqueInput } from './blog-stat-where-unique.input';
import { Type } from 'class-transformer';
import { BlogStatCreateInput } from './blog-stat-create.input';
import { BlogStatUpdateInput } from './blog-stat-update.input';

@ArgsType()
export class UpsertOneBlogStatArgs {

    @Field(() => BlogStatWhereUniqueInput, {nullable:false})
    @Type(() => BlogStatWhereUniqueInput)
    where!: Prisma.AtLeast<BlogStatWhereUniqueInput, 'id' | 'blogId'>;

    @Field(() => BlogStatCreateInput, {nullable:false})
    @Type(() => BlogStatCreateInput)
    create!: BlogStatCreateInput;

    @Field(() => BlogStatUpdateInput, {nullable:false})
    @Type(() => BlogStatUpdateInput)
    update!: BlogStatUpdateInput;
}
