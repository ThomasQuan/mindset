import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class BlogStatMinOrderByAggregateInput {

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
}
