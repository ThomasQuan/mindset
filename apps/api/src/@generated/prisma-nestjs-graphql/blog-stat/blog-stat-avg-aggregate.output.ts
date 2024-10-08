import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BlogStatAvgAggregate {

    @Field(() => Float, {nullable:true})
    likedCount?: number;

    @Field(() => Float, {nullable:true})
    dislikedCount?: number;

    @Field(() => Float, {nullable:true})
    visitedCount?: number;
}
