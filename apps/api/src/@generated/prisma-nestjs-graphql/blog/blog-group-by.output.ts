import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BlogStatus } from '../prisma/blog-status.enum';
import { BlogCountAggregate } from './blog-count-aggregate.output';
import { BlogMinAggregate } from './blog-min-aggregate.output';
import { BlogMaxAggregate } from './blog-max-aggregate.output';

@ObjectType()
export class BlogGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    subtitle?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Boolean, {nullable:false})
    hasEdited!: boolean;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => BlogStatus, {nullable:false})
    status!: keyof typeof BlogStatus;

    @Field(() => BlogCountAggregate, {nullable:true})
    _count?: BlogCountAggregate;

    @Field(() => BlogMinAggregate, {nullable:true})
    _min?: BlogMinAggregate;

    @Field(() => BlogMaxAggregate, {nullable:true})
    _max?: BlogMaxAggregate;
}
