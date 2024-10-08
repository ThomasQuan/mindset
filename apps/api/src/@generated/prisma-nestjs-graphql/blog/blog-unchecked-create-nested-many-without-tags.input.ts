import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateWithoutTagsInput } from './blog-create-without-tags.input';
import { Type } from 'class-transformer';
import { BlogCreateOrConnectWithoutTagsInput } from './blog-create-or-connect-without-tags.input';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';

@InputType()
export class BlogUncheckedCreateNestedManyWithoutTagsInput {

    @Field(() => [BlogCreateWithoutTagsInput], {nullable:true})
    @Type(() => BlogCreateWithoutTagsInput)
    create?: Array<BlogCreateWithoutTagsInput>;

    @Field(() => [BlogCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => BlogCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<BlogCreateOrConnectWithoutTagsInput>;

    @Field(() => [BlogWhereUniqueInput], {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>>;
}
