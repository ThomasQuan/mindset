import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentWhereInput } from './content-where.input';
import { Type } from 'class-transformer';
import { ContentOrderByWithAggregationInput } from './content-order-by-with-aggregation.input';
import { ContentScalarFieldEnum } from './content-scalar-field.enum';
import { ContentScalarWhereWithAggregatesInput } from './content-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ContentCountAggregateInput } from './content-count-aggregate.input';
import { ContentAvgAggregateInput } from './content-avg-aggregate.input';
import { ContentSumAggregateInput } from './content-sum-aggregate.input';
import { ContentMinAggregateInput } from './content-min-aggregate.input';
import { ContentMaxAggregateInput } from './content-max-aggregate.input';

@ArgsType()
export class ContentGroupByArgs {

    @Field(() => ContentWhereInput, {nullable:true})
    @Type(() => ContentWhereInput)
    where?: ContentWhereInput;

    @Field(() => [ContentOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ContentOrderByWithAggregationInput>;

    @Field(() => [ContentScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ContentScalarFieldEnum>;

    @Field(() => ContentScalarWhereWithAggregatesInput, {nullable:true})
    having?: ContentScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ContentCountAggregateInput, {nullable:true})
    _count?: ContentCountAggregateInput;

    @Field(() => ContentAvgAggregateInput, {nullable:true})
    _avg?: ContentAvgAggregateInput;

    @Field(() => ContentSumAggregateInput, {nullable:true})
    _sum?: ContentSumAggregateInput;

    @Field(() => ContentMinAggregateInput, {nullable:true})
    _min?: ContentMinAggregateInput;

    @Field(() => ContentMaxAggregateInput, {nullable:true})
    _max?: ContentMaxAggregateInput;
}
