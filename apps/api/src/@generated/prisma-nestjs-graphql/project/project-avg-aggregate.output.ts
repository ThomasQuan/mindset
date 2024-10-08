import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ProjectAvgAggregate {

    @Field(() => Float, {nullable:true})
    orderNo?: number;
}
