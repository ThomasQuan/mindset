import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogWhereInput } from './blog-where.input';
import { Type } from 'class-transformer';
import { BlogOrderByWithAggregationInput } from './blog-order-by-with-aggregation.input';
import { BlogScalarFieldEnum } from './blog-scalar-field.enum';
import { BlogScalarWhereWithAggregatesInput } from './blog-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BlogCountAggregateInput } from './blog-count-aggregate.input';
import { BlogMinAggregateInput } from './blog-min-aggregate.input';
import { BlogMaxAggregateInput } from './blog-max-aggregate.input';

@ArgsType()
export class BlogGroupByArgs {

    @Field(() => BlogWhereInput, {nullable:true})
    @Type(() => BlogWhereInput)
    where?: BlogWhereInput;

    @Field(() => [BlogOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BlogOrderByWithAggregationInput>;

    @Field(() => [BlogScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BlogScalarFieldEnum>;

    @Field(() => BlogScalarWhereWithAggregatesInput, {nullable:true})
    having?: BlogScalarWhereWithAggregatesInput;

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
