import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BlogStatSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    likedCount?: true;

    @Field(() => Boolean, {nullable:true})
    dislikedCount?: true;

    @Field(() => Boolean, {nullable:true})
    visitedCount?: true;
}
