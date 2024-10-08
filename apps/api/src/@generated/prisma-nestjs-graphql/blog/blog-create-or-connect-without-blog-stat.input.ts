import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { Type } from 'class-transformer';
import { BlogCreateWithoutBlogStatInput } from './blog-create-without-blog-stat.input';

@InputType()
export class BlogCreateOrConnectWithoutBlogStatInput {

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => BlogCreateWithoutBlogStatInput, {nullable:false})
    @Type(() => BlogCreateWithoutBlogStatInput)
    create!: BlogCreateWithoutBlogStatInput;
}
