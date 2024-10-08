import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateWithoutAuthorInput } from './blog-create-without-author.input';
import { Type } from 'class-transformer';
import { BlogCreateOrConnectWithoutAuthorInput } from './blog-create-or-connect-without-author.input';
import { BlogUpsertWithWhereUniqueWithoutAuthorInput } from './blog-upsert-with-where-unique-without-author.input';
import { BlogCreateManyAuthorInputEnvelope } from './blog-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { BlogUpdateWithWhereUniqueWithoutAuthorInput } from './blog-update-with-where-unique-without-author.input';
import { BlogUpdateManyWithWhereWithoutAuthorInput } from './blog-update-many-with-where-without-author.input';
import { BlogScalarWhereInput } from './blog-scalar-where.input';

@InputType()
export class BlogUpdateManyWithoutAuthorNestedInput {

    @Field(() => [BlogCreateWithoutAuthorInput], {nullable:true})
    @Type(() => BlogCreateWithoutAuthorInput)
    create?: Array<BlogCreateWithoutAuthorInput>;

    @Field(() => [BlogCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => BlogCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<BlogCreateOrConnectWithoutAuthorInput>;

    @Field(() => [BlogUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => BlogUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<BlogUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => BlogCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => BlogCreateManyAuthorInputEnvelope)
    createMany?: BlogCreateManyAuthorInputEnvelope;

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

    @Field(() => [BlogUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => BlogUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<BlogUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [BlogUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => BlogUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<BlogUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [BlogScalarWhereInput], {nullable:true})
    @Type(() => BlogScalarWhereInput)
    deleteMany?: Array<BlogScalarWhereInput>;
}
