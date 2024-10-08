import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ContentCountOrderByAggregateInput } from './content-count-order-by-aggregate.input';
import { ContentAvgOrderByAggregateInput } from './content-avg-order-by-aggregate.input';
import { ContentMaxOrderByAggregateInput } from './content-max-order-by-aggregate.input';
import { ContentMinOrderByAggregateInput } from './content-min-order-by-aggregate.input';
import { ContentSumOrderByAggregateInput } from './content-sum-order-by-aggregate.input';

@InputType()
export class ContentOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    markdownContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    htmlContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    orderNo?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    objectAs?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    blogId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    projectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ContentCountOrderByAggregateInput, {nullable:true})
    _count?: ContentCountOrderByAggregateInput;

    @Field(() => ContentAvgOrderByAggregateInput, {nullable:true})
    _avg?: ContentAvgOrderByAggregateInput;

    @Field(() => ContentMaxOrderByAggregateInput, {nullable:true})
    _max?: ContentMaxOrderByAggregateInput;

    @Field(() => ContentMinOrderByAggregateInput, {nullable:true})
    _min?: ContentMinOrderByAggregateInput;

    @Field(() => ContentSumOrderByAggregateInput, {nullable:true})
    _sum?: ContentSumOrderByAggregateInput;
}
