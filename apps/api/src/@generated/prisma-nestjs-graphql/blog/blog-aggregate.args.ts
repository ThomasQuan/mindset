import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogWhereInput } from './blog-where.input';
import { Type } from 'class-transformer';
import { BlogOrderByWithRelationInput } from './blog-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BlogCountAggregateInput } from './blog-count-aggregate.input';
import { BlogMinAggregateInput } from './blog-min-aggregate.input';
import { BlogMaxAggregateInput } from './blog-max-aggregate.input';

@ArgsType()
export class BlogAggregateArgs {

    @Field(() => BlogWhereInput, {nullable:true})
    @Type(() => BlogWhereInput)
    where?: BlogWhereInput;

    @Field(() => [BlogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BlogOrderByWithRelationInput>;

    @Field(() => BlogWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BlogCountAggregateInput, {nullable:true})
    _count?: BlogCountAggregateInput;

    @Field(() => BlogMinAggregateInput, {nullable:true})
    _min?: BlogMinAggregateInput;

    @Field(() => BlogMaxAggregateInput, {nullable:true})
    _max?: BlogMaxAggregateInput;
}
