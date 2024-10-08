import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContentStatus } from '../prisma/content-status.enum';
import { Int } from '@nestjs/graphql';
import { ContentCountAggregate } from './content-count-aggregate.output';
import { ContentAvgAggregate } from './content-avg-aggregate.output';
import { ContentSumAggregate } from './content-sum-aggregate.output';
import { ContentMinAggregate } from './content-min-aggregate.output';
import { ContentMaxAggregate } from './content-max-aggregate.output';

@ObjectType()
export class ContentGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    markdownContent!: string;

    @Field(() => String, {nullable:false})
    htmlContent!: string;

    @Field(() => ContentStatus, {nullable:false})
    status!: keyof typeof ContentStatus;

    @Field(() => Int, {nullable:false})
    orderNo!: number;

    @Field(() => String, {nullable:false})
    objectAs!: string;

    @Field(() => String, {nullable:true})
    blogId?: string;

    @Field(() => String, {nullable:true})
    projectId?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
