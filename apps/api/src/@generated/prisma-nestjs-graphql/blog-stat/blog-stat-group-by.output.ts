import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BlogStatCountAggregate } from './blog-stat-count-aggregate.output';
import { BlogStatAvgAggregate } from './blog-stat-avg-aggregate.output';
import { BlogStatSumAggregate } from './blog-stat-sum-aggregate.output';
import { BlogStatMinAggregate } from './blog-stat-min-aggregate.output';
import { BlogStatMaxAggregate } from './blog-stat-max-aggregate.output';

@ObjectType()
export class BlogStatGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    blogId!: string;

    @Field(() => Int, {nullable:false})
    likedCount!: number;

    @Field(() => Int, {nullable:false})
    dislikedCount!: number;

    @Field(() => Int, {nullable:false})
    visitedCount!: number;

    @Field(() => BlogStatCountAggregate, {nullable:true})
    _count?: BlogStatCountAggregate;

    @Field(() => BlogStatAvgAggregate, {nullable:true})
    _avg?: BlogStatAvgAggregate;

    @Field(() => BlogStatSumAggregate, {nullable:true})
    _sum?: BlogStatSumAggregate;

    @Field(() => BlogStatMinAggregate, {nullable:true})
    _min?: BlogStatMinAggregate;

    @Field(() => BlogStatMaxAggregate, {nullable:true})
    _max?: BlogStatMaxAggregate;
}
