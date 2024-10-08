import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogStatus } from '../prisma/blog-status.enum';

@InputType()
export class BlogCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

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

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => BlogStatus, {nullable:true})
    status?: keyof typeof BlogStatus;
}
