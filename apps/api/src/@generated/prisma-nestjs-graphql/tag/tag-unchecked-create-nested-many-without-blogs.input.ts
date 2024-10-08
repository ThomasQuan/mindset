import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutBlogsInput } from './tag-create-without-blogs.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutBlogsInput } from './tag-create-or-connect-without-blogs.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagUncheckedCreateNestedManyWithoutBlogsInput {

    @Field(() => [TagCreateWithoutBlogsInput], {nullable:true})
    @Type(() => TagCreateWithoutBlogsInput)
    create?: Array<TagCreateWithoutBlogsInput>;

    @Field(() => [TagCreateOrConnectWithoutBlogsInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutBlogsInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutBlogsInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'slug'>>;
}
