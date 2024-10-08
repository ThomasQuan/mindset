import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Blog } from '../blog/blog.model';
import { Project } from '../project/project.model';
import { TagCount } from './tag-count.output';

@ObjectType()
export class Tag {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:true})
    color!: string | null;

    @Field(() => String, {nullable:true})
    category!: string | null;

    @Field(() => Int, {nullable:true})
    categoryOrder!: number | null;

    @Field(() => Int, {nullable:true})
    tagOrder!: number | null;

    @Field(() => [Blog], {nullable:true})
    blogs?: Array<Blog>;

    @Field(() => [Project], {nullable:true})
    projects?: Array<Project>;

    @Field(() => TagCount, {nullable:false})
    _count?: TagCount;
}
