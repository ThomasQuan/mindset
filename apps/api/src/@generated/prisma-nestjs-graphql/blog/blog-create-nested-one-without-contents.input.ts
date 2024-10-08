import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateWithoutContentsInput } from './blog-create-without-contents.input';
import { Type } from 'class-transformer';
import { BlogCreateOrConnectWithoutContentsInput } from './blog-create-or-connect-without-contents.input';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';

@InputType()
export class BlogCreateNestedOneWithoutContentsInput {

    @Field(() => BlogCreateWithoutContentsInput, {nullable:true})
    @Type(() => BlogCreateWithoutContentsInput)
    create?: BlogCreateWithoutContentsInput;

    @Field(() => BlogCreateOrConnectWithoutContentsInput, {nullable:true})
    @Type(() => BlogCreateOrConnectWithoutContentsInput)
    connectOrCreate?: BlogCreateOrConnectWithoutContentsInput;

    @Field(() => BlogWhereUniqueInput, {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    connect?: Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>;
}
