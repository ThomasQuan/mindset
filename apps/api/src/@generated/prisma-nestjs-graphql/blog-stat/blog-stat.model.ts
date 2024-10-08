import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Blog } from '../blog/blog.model';

@ObjectType()
export class BlogStat {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    blogId!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    likedCount!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    dislikedCount!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    visitedCount!: number;

    @Field(() => Blog, {nullable:false})
    blog?: Blog;
}
