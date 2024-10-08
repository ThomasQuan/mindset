import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BlogStatus } from '../prisma/blog-status.enum';

@ObjectType()
export class BlogMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

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
    authorId?: string;

    @Field(() => BlogStatus, {nullable:true})
    status?: keyof typeof BlogStatus;
}
