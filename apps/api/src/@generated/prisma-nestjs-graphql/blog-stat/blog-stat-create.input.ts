import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BlogCreateNestedOneWithoutBlogStatInput } from '../blog/blog-create-nested-one-without-blog-stat.input';

@InputType()
export class BlogStatCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    likedCount?: number;

    @Field(() => Int, {nullable:true})
    dislikedCount?: number;

    @Field(() => Int, {nullable:true})
    visitedCount?: number;

    @Field(() => BlogCreateNestedOneWithoutBlogStatInput, {nullable:false})
    blog!: BlogCreateNestedOneWithoutBlogStatInput;
}
