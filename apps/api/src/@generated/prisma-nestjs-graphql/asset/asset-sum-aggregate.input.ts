import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AssetSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    width?: true;

    @Field(() => Boolean, {nullable:true})
    height?: true;
}
