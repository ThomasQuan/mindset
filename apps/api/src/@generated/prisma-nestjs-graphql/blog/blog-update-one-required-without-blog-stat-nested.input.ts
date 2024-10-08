import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateWithoutBlogStatInput } from './blog-create-without-blog-stat.input';
import { Type } from 'class-transformer';
import { BlogCreateOrConnectWithoutBlogStatInput } from './blog-create-or-connect-without-blog-stat.input';
import { BlogUpsertWithoutBlogStatInput } from './blog-upsert-without-blog-stat.input';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { BlogUpdateToOneWithWhereWithoutBlogStatInput } from './blog-update-to-one-with-where-without-blog-stat.input';

@InputType()
export class BlogUpdateOneRequiredWithoutBlogStatNestedInput {

    @Field(() => BlogCreateWithoutBlogStatInput, {nullable:true})
    @Type(() => BlogCreateWithoutBlogStatInput)
    create?: BlogCreateWithoutBlogStatInput;

    @Field(() => BlogCreateOrConnectWithoutBlogStatInput, {nullable:true})
    @Type(() => BlogCreateOrConnectWithoutBlogStatInput)
    connectOrCreate?: BlogCreateOrConnectWithoutBlogStatInput;

    @Field(() => BlogUpsertWithoutBlogStatInput, {nullable:true})
    @Type(() => BlogUpsertWithoutBlogStatInput)
    upsert?: BlogUpsertWithoutBlogStatInput;

    @Field(() => BlogWhereUniqueInput, {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    connect?: Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => BlogUpdateToOneWithWhereWithoutBlogStatInput, {nullable:true})
    @Type(() => BlogUpdateToOneWithWhereWithoutBlogStatInput)
    update?: BlogUpdateToOneWithWhereWithoutBlogStatInput;
}
