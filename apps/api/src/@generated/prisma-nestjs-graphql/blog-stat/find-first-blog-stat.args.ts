import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogStatWhereInput } from './blog-stat-where.input';
import { Type } from 'class-transformer';
import { BlogStatOrderByWithRelationInput } from './blog-stat-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BlogStatWhereUniqueInput } from './blog-stat-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BlogStatScalarFieldEnum } from './blog-stat-scalar-field.enum';

@ArgsType()
export class FindFirstBlogStatArgs {

    @Field(() => BlogStatWhereInput, {nullable:true})
    @Type(() => BlogStatWhereInput)
    where?: BlogStatWhereInput;

    @Field(() => [BlogStatOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BlogStatOrderByWithRelationInput>;

    @Field(() => BlogStatWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BlogStatWhereUniqueInput, 'id' | 'blogId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BlogStatScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BlogStatScalarFieldEnum>;
}
