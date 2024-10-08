import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BlogStatCountOrderByAggregateInput } from './blog-stat-count-order-by-aggregate.input';
import { BlogStatAvgOrderByAggregateInput } from './blog-stat-avg-order-by-aggregate.input';
import { BlogStatMaxOrderByAggregateInput } from './blog-stat-max-order-by-aggregate.input';
import { BlogStatMinOrderByAggregateInput } from './blog-stat-min-order-by-aggregate.input';
import { BlogStatSumOrderByAggregateInput } from './blog-stat-sum-order-by-aggregate.input';

@InputType()
export class BlogStatOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    blogId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likedCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    dislikedCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    visitedCount?: keyof typeof SortOrder;

    @Field(() => BlogStatCountOrderByAggregateInput, {nullable:true})
    _count?: BlogStatCountOrderByAggregateInput;

    @Field(() => BlogStatAvgOrderByAggregateInput, {nullable:true})
    _avg?: BlogStatAvgOrderByAggregateInput;

    @Field(() => BlogStatMaxOrderByAggregateInput, {nullable:true})
    _max?: BlogStatMaxOrderByAggregateInput;

    @Field(() => BlogStatMinOrderByAggregateInput, {nullable:true})
    _min?: BlogStatMinOrderByAggregateInput;

    @Field(() => BlogStatSumOrderByAggregateInput, {nullable:true})
    _sum?: BlogStatSumOrderByAggregateInput;
}
