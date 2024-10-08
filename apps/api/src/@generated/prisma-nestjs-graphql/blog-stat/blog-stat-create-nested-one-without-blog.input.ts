import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogStatCreateWithoutBlogInput } from './blog-stat-create-without-blog.input';
import { Type } from 'class-transformer';
import { BlogStatCreateOrConnectWithoutBlogInput } from './blog-stat-create-or-connect-without-blog.input';
import { Prisma } from '@prisma/client';
import { BlogStatWhereUniqueInput } from './blog-stat-where-unique.input';

@InputType()
export class BlogStatCreateNestedOneWithoutBlogInput {

    @Field(() => BlogStatCreateWithoutBlogInput, {nullable:true})
    @Type(() => BlogStatCreateWithoutBlogInput)
    create?: BlogStatCreateWithoutBlogInput;

    @Field(() => BlogStatCreateOrConnectWithoutBlogInput, {nullable:true})
    @Type(() => BlogStatCreateOrConnectWithoutBlogInput)
    connectOrCreate?: BlogStatCreateOrConnectWithoutBlogInput;

    @Field(() => BlogStatWhereUniqueInput, {nullable:true})
    @Type(() => BlogStatWhereUniqueInput)
    connect?: Prisma.AtLeast<BlogStatWhereUniqueInput, 'id' | 'blogId'>;
}
