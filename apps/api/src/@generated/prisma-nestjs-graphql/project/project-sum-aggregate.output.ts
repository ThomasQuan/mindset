import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProjectSumAggregate {

    @Field(() => Int, {nullable:true})
    orderNo?: number;
}
