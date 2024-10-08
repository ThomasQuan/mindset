import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ContentAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    orderNo?: keyof typeof SortOrder;
}
