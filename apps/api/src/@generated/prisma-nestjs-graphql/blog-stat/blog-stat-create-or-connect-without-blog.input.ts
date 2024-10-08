import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BlogStatWhereUniqueInput } from './blog-stat-where-unique.input';
import { Type } from 'class-transformer';
import { BlogStatCreateWithoutBlogInput } from './blog-stat-create-without-blog.input';

@InputType()
export class BlogStatCreateOrConnectWithoutBlogInput {

    @Field(() => BlogStatWhereUniqueInput, {nullable:false})
    @Type(() => BlogStatWhereUniqueInput)
    where!: Prisma.AtLeast<BlogStatWhereUniqueInput, 'id' | 'blogId'>;

    @Field(() => BlogStatCreateWithoutBlogInput, {nullable:false})
    @Type(() => BlogStatCreateWithoutBlogInput)
    create!: BlogStatCreateWithoutBlogInput;
}
