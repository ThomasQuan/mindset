import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProjectStatus } from '../prisma/project-status.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ProjectMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    subtitle?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    hasEdited?: boolean;

    @Field(() => String, {nullable:true})
    gitRepoLink?: string;

    @Field(() => String, {nullable:true})
    projectLink?: string;

    @Field(() => String, {nullable:true})
    designLink?: string;

    @Field(() => ProjectStatus, {nullable:true})
    status?: keyof typeof ProjectStatus;

    @Field(() => Int, {nullable:true})
    orderNo?: number;

    @Field(() => String, {nullable:true})
    objectAs?: string;

    @Field(() => String, {nullable:true})
    authorId?: string;
}
