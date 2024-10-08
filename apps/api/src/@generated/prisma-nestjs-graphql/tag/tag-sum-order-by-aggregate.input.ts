import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class TagSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    categoryOrder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tagOrder?: keyof typeof SortOrder;
}
