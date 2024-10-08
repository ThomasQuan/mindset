import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogStatCreateWithoutBlogInput } from './blog-stat-create-without-blog.input';
import { Type } from 'class-transformer';
import { BlogStatCreateOrConnectWithoutBlogInput } from './blog-stat-create-or-connect-without-blog.input';
import { BlogStatUpsertWithoutBlogInput } from './blog-stat-upsert-without-blog.input';
import { BlogStatWhereInput } from './blog-stat-where.input';
import { Prisma } from '@prisma/client';
import { BlogStatWhereUniqueInput } from './blog-stat-where-unique.input';
import { BlogStatUpdateToOneWithWhereWithoutBlogInput } from './blog-stat-update-to-one-with-where-without-blog.input';

@InputType()
export class BlogStatUncheckedUpdateOneWithoutBlogNestedInput {

    @Field(() => BlogStatCreateWithoutBlogInput, {nullable:true})
    @Type(() => BlogStatCreateWithoutBlogInput)
    create?: BlogStatCreateWithoutBlogInput;

    @Field(() => BlogStatCreateOrConnectWithoutBlogInput, {nullable:true})
    @Type(() => BlogStatCreateOrConnectWithoutBlogInput)
    connectOrCreate?: BlogStatCreateOrConnectWithoutBlogInput;

    @Field(() => BlogStatUpsertWithoutBlogInput, {nullable:true})
    @Type(() => BlogStatUpsertWithoutBlogInput)
    upsert?: BlogStatUpsertWithoutBlogInput;

    @Field(() => BlogStatWhereInput, {nullable:true})
    @Type(() => BlogStatWhereInput)
    disconnect?: BlogStatWhereInput;

    @Field(() => BlogStatWhereInput, {nullable:true})
    @Type(() => BlogStatWhereInput)
    delete?: BlogStatWhereInput;

    @Field(() => BlogStatWhereUniqueInput, {nullable:true})
    @Type(() => BlogStatWhereUniqueInput)
    connect?: Prisma.AtLeast<BlogStatWhereUniqueInput, 'id' | 'blogId'>;

    @Field(() => BlogStatUpdateToOneWithWhereWithoutBlogInput, {nullable:true})
    @Type(() => BlogStatUpdateToOneWithWhereWithoutBlogInput)
    update?: BlogStatUpdateToOneWithWhereWithoutBlogInput;
}
