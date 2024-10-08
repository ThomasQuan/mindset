import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ContentSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    orderNo?: true;
}
