import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BlogStatMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    blogId?: string;

    @Field(() => Int, {nullable:true})
    likedCount?: number;

    @Field(() => Int, {nullable:true})
    dislikedCount?: number;

    @Field(() => Int, {nullable:true})
    visitedCount?: number;
}
