import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ContentAvgAggregate {

    @Field(() => Float, {nullable:true})
    orderNo?: number;
}
