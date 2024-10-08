import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class TagCount {

    @Field(() => Int, {nullable:false})
    blogs?: number;

    @Field(() => Int, {nullable:false})
    projects?: number;
}
