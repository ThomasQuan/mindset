import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ContentStatus } from '../prisma/content-status.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ContentMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => String, {nullable:true})
    markdownContent?: string;

    @Field(() => String, {nullable:true})
    htmlContent?: string;

    @Field(() => ContentStatus, {nullable:true})
    status?: keyof typeof ContentStatus;

    @Field(() => Int, {nullable:true})
    orderNo?: number;

    @Field(() => String, {nullable:true})
    objectAs?: string;

    @Field(() => String, {nullable:true})
    blogId?: string;

    @Field(() => String, {nullable:true})
    projectId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
