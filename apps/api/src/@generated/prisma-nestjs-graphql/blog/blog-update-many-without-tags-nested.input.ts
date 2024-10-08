import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateWithoutTagsInput } from './blog-create-without-tags.input';
import { Type } from 'class-transformer';
import { BlogCreateOrConnectWithoutTagsInput } from './blog-create-or-connect-without-tags.input';
import { BlogUpsertWithWhereUniqueWithoutTagsInput } from './blog-upsert-with-where-unique-without-tags.input';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { BlogUpdateWithWhereUniqueWithoutTagsInput } from './blog-update-with-where-unique-without-tags.input';
import { BlogUpdateManyWithWhereWithoutTagsInput } from './blog-update-many-with-where-without-tags.input';
import { BlogScalarWhereInput } from './blog-scalar-where.input';

@InputType()
export class BlogUpdateManyWithoutTagsNestedInput {

    @Field(() => [BlogCreateWithoutTagsInput], {nullable:true})
    @Type(() => BlogCreateWithoutTagsInput)
    create?: Array<BlogCreateWithoutTagsInput>;

    @Field(() => [BlogCreateOrConnectWithoutTagsInput], {nullable:true})
    @Type(() => BlogCreateOrConnectWithoutTagsInput)
    connectOrCreate?: Array<BlogCreateOrConnectWithoutTagsInput>;

    @Field(() => [BlogUpsertWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => BlogUpsertWithWhereUniqueWithoutTagsInput)
    upsert?: Array<BlogUpsertWithWhereUniqueWithoutTagsInput>;

    @Field(() => [BlogWhereUniqueInput], {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    set?: Array<Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [BlogWhereUniqueInput], {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [BlogWhereUniqueInput], {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [BlogWhereUniqueInput], {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [BlogUpdateWithWhereUniqueWithoutTagsInput], {nullable:true})
    @Type(() => BlogUpdateWithWhereUniqueWithoutTagsInput)
    update?: Array<BlogUpdateWithWhereUniqueWithoutTagsInput>;

    @Field(() => [BlogUpdateManyWithWhereWithoutTagsInput], {nullable:true})
    @Type(() => BlogUpdateManyWithWhereWithoutTagsInput)
    updateMany?: Array<BlogUpdateManyWithWhereWithoutTagsInput>;

    @Field(() => [BlogScalarWhereInput], {nullable:true})
    @Type(() => BlogScalarWhereInput)
    deleteMany?: Array<BlogScalarWhereInput>;
}
