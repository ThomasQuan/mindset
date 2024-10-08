import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TagAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    categoryOrder?: true;

    @Field(() => Boolean, {nullable:true})
    tagOrder?: true;
}
