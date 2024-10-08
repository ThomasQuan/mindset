import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class TagAvgAggregate {

    @Field(() => Float, {nullable:true})
    categoryOrder?: number;

    @Field(() => Float, {nullable:true})
    tagOrder?: number;
}
