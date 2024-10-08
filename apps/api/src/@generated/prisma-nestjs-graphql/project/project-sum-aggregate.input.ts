import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ProjectSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    orderNo?: true;
}
