import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BlogCountAggregate } from './blog-count-aggregate.output';
import { BlogMinAggregate } from './blog-min-aggregate.output';
import { BlogMaxAggregate } from './blog-max-aggregate.output';

@ObjectType()
export class AggregateBlog {

    @Field(() => BlogCountAggregate, {nullable:true})
    _count?: BlogCountAggregate;

    @Field(() => BlogMinAggregate, {nullable:true})
    _min?: BlogMinAggregate;

    @Field(() => BlogMaxAggregate, {nullable:true})
    _max?: BlogMaxAggregate;
}
