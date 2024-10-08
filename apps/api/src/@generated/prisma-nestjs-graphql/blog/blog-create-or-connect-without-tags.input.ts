import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { Type } from 'class-transformer';
import { BlogCreateWithoutTagsInput } from './blog-create-without-tags.input';

@InputType()
export class BlogCreateOrConnectWithoutTagsInput {

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => BlogCreateWithoutTagsInput, {nullable:false})
    @Type(() => BlogCreateWithoutTagsInput)
    create!: BlogCreateWithoutTagsInput;
}
