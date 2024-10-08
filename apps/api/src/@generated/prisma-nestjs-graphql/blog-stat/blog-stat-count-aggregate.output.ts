import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BlogStatCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    blogId!: number;

    @Field(() => Int, {nullable:false})
    likedCount!: number;

    @Field(() => Int, {nullable:false})
    dislikedCount!: number;

    @Field(() => Int, {nullable:false})
    visitedCount!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
