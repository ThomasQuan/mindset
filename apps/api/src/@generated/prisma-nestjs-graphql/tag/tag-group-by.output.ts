import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TagCountAggregate } from './tag-count-aggregate.output';
import { TagAvgAggregate } from './tag-avg-aggregate.output';
import { TagSumAggregate } from './tag-sum-aggregate.output';
import { TagMinAggregate } from './tag-min-aggregate.output';
import { TagMaxAggregate } from './tag-max-aggregate.output';

@ObjectType()
export class TagGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:true})
    category?: string;

    @Field(() => Int, {nullable:true})
    categoryOrder?: number;

    @Field(() => Int, {nullable:true})
    tagOrder?: number;

    @Field(() => TagCountAggregate, {nullable:true})
    _count?: TagCountAggregate;

    @Field(() => TagAvgAggregate, {nullable:true})
    _avg?: TagAvgAggregate;

    @Field(() => TagSumAggregate, {nullable:true})
    _sum?: TagSumAggregate;

    @Field(() => TagMinAggregate, {nullable:true})
    _min?: TagMinAggregate;

    @Field(() => TagMaxAggregate, {nullable:true})
    _max?: TagMaxAggregate;
}
