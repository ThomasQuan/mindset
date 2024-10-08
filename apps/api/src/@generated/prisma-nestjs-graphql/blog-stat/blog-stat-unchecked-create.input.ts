import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class BlogStatUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    blogId!: string;

    @Field(() => Int, {nullable:true})
    likedCount?: number;

    @Field(() => Int, {nullable:true})
    dislikedCount?: number;

    @Field(() => Int, {nullable:true})
    visitedCount?: number;
}
