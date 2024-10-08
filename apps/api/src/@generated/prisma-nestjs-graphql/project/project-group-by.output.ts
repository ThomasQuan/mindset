import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectStatus } from '../prisma/project-status.enum';
import { Int } from '@nestjs/graphql';
import { ProjectCountAggregate } from './project-count-aggregate.output';
import { ProjectAvgAggregate } from './project-avg-aggregate.output';
import { ProjectSumAggregate } from './project-sum-aggregate.output';
import { ProjectMinAggregate } from './project-min-aggregate.output';
import { ProjectMaxAggregate } from './project-max-aggregate.output';

@ObjectType()
export class ProjectGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

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

    @Field(() => String, {nullable:true})
    gitRepoLink?: string;

    @Field(() => String, {nullable:true})
    projectLink?: string;

    @Field(() => String, {nullable:true})
    designLink?: string;

    @Field(() => ProjectStatus, {nullable:false})
    status!: keyof typeof ProjectStatus;

    @Field(() => Int, {nullable:false})
    orderNo!: number;

    @Field(() => String, {nullable:false})
    objectAs!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => ProjectCountAggregate, {nullable:true})
    _count?: ProjectCountAggregate;

    @Field(() => ProjectAvgAggregate, {nullable:true})
    _avg?: ProjectAvgAggregate;

    @Field(() => ProjectSumAggregate, {nullable:true})
    _sum?: ProjectSumAggregate;

    @Field(() => ProjectMinAggregate, {nullable:true})
    _min?: ProjectMinAggregate;

    @Field(() => ProjectMaxAggregate, {nullable:true})
    _max?: ProjectMaxAggregate;
}
