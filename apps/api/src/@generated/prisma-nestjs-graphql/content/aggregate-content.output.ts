import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContentCountAggregate } from './content-count-aggregate.output';
import { ContentAvgAggregate } from './content-avg-aggregate.output';
import { ContentSumAggregate } from './content-sum-aggregate.output';
import { ContentMinAggregate } from './content-min-aggregate.output';
import { ContentMaxAggregate } from './content-max-aggregate.output';

@ObjectType()
export class AggregateContent {

    @Field(() => ContentCountAggregate, {nullable:true})
    _count?: ContentCountAggregate;

    @Field(() => ContentAvgAggregate, {nullable:true})
    _avg?: ContentAvgAggregate;

    @Field(() => ContentSumAggregate, {nullable:true})
    _sum?: ContentSumAggregate;

    @Field(() => ContentMinAggregate, {nullable:true})
    _min?: ContentMinAggregate;

    @Field(() => ContentMaxAggregate, {nullable:true})
    _max?: ContentMaxAggregate;
}
