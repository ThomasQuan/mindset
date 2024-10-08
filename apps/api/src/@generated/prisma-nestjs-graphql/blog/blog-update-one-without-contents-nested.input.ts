import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateWithoutContentsInput } from './blog-create-without-contents.input';
import { Type } from 'class-transformer';
import { BlogCreateOrConnectWithoutContentsInput } from './blog-create-or-connect-without-contents.input';
import { BlogUpsertWithoutContentsInput } from './blog-upsert-without-contents.input';
import { BlogWhereInput } from './blog-where.input';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { BlogUpdateToOneWithWhereWithoutContentsInput } from './blog-update-to-one-with-where-without-contents.input';

@InputType()
export class BlogUpdateOneWithoutContentsNestedInput {

    @Field(() => BlogCreateWithoutContentsInput, {nullable:true})
    @Type(() => BlogCreateWithoutContentsInput)
    create?: BlogCreateWithoutContentsInput;

    @Field(() => BlogCreateOrConnectWithoutContentsInput, {nullable:true})
    @Type(() => BlogCreateOrConnectWithoutContentsInput)
    connectOrCreate?: BlogCreateOrConnectWithoutContentsInput;

    @Field(() => BlogUpsertWithoutContentsInput, {nullable:true})
    @Type(() => BlogUpsertWithoutContentsInput)
    upsert?: BlogUpsertWithoutContentsInput;

    @Field(() => BlogWhereInput, {nullable:true})
    @Type(() => BlogWhereInput)
    disconnect?: BlogWhereInput;

    @Field(() => BlogWhereInput, {nullable:true})
    @Type(() => BlogWhereInput)
    delete?: BlogWhereInput;

    @Field(() => BlogWhereUniqueInput, {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    connect?: Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => BlogUpdateToOneWithWhereWithoutContentsInput, {nullable:true})
    @Type(() => BlogUpdateToOneWithWhereWithoutContentsInput)
    update?: BlogUpdateToOneWithWhereWithoutContentsInput;
}
