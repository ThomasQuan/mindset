import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { Type } from 'class-transformer';
import { BlogCreateWithoutContentsInput } from './blog-create-without-contents.input';

@InputType()
export class BlogCreateOrConnectWithoutContentsInput {

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => BlogCreateWithoutContentsInput, {nullable:false})
    @Type(() => BlogCreateWithoutContentsInput)
    create!: BlogCreateWithoutContentsInput;
}
