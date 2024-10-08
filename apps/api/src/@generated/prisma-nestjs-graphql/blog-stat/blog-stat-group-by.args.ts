import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogStatWhereInput } from './blog-stat-where.input';
import { Type } from 'class-transformer';
import { BlogStatOrderByWithAggregationInput } from './blog-stat-order-by-with-aggregation.input';
import { BlogStatScalarFieldEnum } from './blog-stat-scalar-field.enum';
import { BlogStatScalarWhereWithAggregatesInput } from './blog-stat-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { BlogStatCountAggregateInput } from './blog-stat-count-aggregate.input';
import { BlogStatAvgAggregateInput } from './blog-stat-avg-aggregate.input';
import { BlogStatSumAggregateInput } from './blog-stat-sum-aggregate.input';
import { BlogStatMinAggregateInput } from './blog-stat-min-aggregate.input';
import { BlogStatMaxAggregateInput } from './blog-stat-max-aggregate.input';

@ArgsType()
export class BlogStatGroupByArgs {

    @Field(() => BlogStatWhereInput, {nullable:true})
    @Type(() => BlogStatWhereInput)
    where?: BlogStatWhereInput;

    @Field(() => [BlogStatOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BlogStatOrderByWithAggregationInput>;

    @Field(() => [BlogStatScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BlogStatScalarFieldEnum>;

    @Field(() => BlogStatScalarWhereWithAggregatesInput, {nullable:true})
    having?: BlogStatScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => BlogStatCountAggregateInput, {nullable:true})
    _count?: BlogStatCountAggregateInput;

    @Field(() => BlogStatAvgAggregateInput, {nullable:true})
    _avg?: BlogStatAvgAggregateInput;

    @Field(() => BlogStatSumAggregateInput, {nullable:true})
    _sum?: BlogStatSumAggregateInput;

    @Field(() => BlogStatMinAggregateInput, {nullable:true})
    _min?: BlogStatMinAggregateInput;

    @Field(() => BlogStatMaxAggregateInput, {nullable:true})
    _max?: BlogStatMaxAggregateInput;
}
