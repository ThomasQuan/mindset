import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { TagCountOrderByAggregateInput } from './tag-count-order-by-aggregate.input';
import { TagAvgOrderByAggregateInput } from './tag-avg-order-by-aggregate.input';
import { TagMaxOrderByAggregateInput } from './tag-max-order-by-aggregate.input';
import { TagMinOrderByAggregateInput } from './tag-min-order-by-aggregate.input';
import { TagSumOrderByAggregateInput } from './tag-sum-order-by-aggregate.input';

@InputType()
export class TagOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    color?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    category?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    categoryOrder?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    tagOrder?: SortOrderInput;

    @Field(() => TagCountOrderByAggregateInput, {nullable:true})
    _count?: TagCountOrderByAggregateInput;

    @Field(() => TagAvgOrderByAggregateInput, {nullable:true})
    _avg?: TagAvgOrderByAggregateInput;

    @Field(() => TagMaxOrderByAggregateInput, {nullable:true})
    _max?: TagMaxOrderByAggregateInput;

    @Field(() => TagMinOrderByAggregateInput, {nullable:true})
    _min?: TagMinOrderByAggregateInput;

    @Field(() => TagSumOrderByAggregateInput, {nullable:true})
    _sum?: TagSumOrderByAggregateInput;
}
