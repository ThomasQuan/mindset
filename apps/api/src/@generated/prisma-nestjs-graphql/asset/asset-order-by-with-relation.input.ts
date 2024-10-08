import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ContentOrderByRelationAggregateInput } from '../content/content-order-by-relation-aggregate.input';

@InputType()
export class AssetOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    width?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    height?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    resolution?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ContentOrderByRelationAggregateInput, {nullable:true})
    contents?: ContentOrderByRelationAggregateInput;
}
