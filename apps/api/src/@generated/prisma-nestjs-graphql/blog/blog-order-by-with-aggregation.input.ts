import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { BlogCountOrderByAggregateInput } from './blog-count-order-by-aggregate.input';
import { BlogMaxOrderByAggregateInput } from './blog-max-order-by-aggregate.input';
import { BlogMinOrderByAggregateInput } from './blog-min-order-by-aggregate.input';

@InputType()
export class BlogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    subtitle?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hasEdited?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => BlogCountOrderByAggregateInput, {nullable:true})
    _count?: BlogCountOrderByAggregateInput;

    @Field(() => BlogMaxOrderByAggregateInput, {nullable:true})
    _max?: BlogMaxOrderByAggregateInput;

    @Field(() => BlogMinOrderByAggregateInput, {nullable:true})
    _min?: BlogMinOrderByAggregateInput;
}
