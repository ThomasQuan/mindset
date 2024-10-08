import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutBlogsInput } from './tag-update-without-blogs.input';
import { TagCreateWithoutBlogsInput } from './tag-create-without-blogs.input';

@InputType()
export class TagUpsertWithWhereUniqueWithoutBlogsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => TagUpdateWithoutBlogsInput, {nullable:false})
    @Type(() => TagUpdateWithoutBlogsInput)
    update!: TagUpdateWithoutBlogsInput;

    @Field(() => TagCreateWithoutBlogsInput, {nullable:false})
    @Type(() => TagCreateWithoutBlogsInput)
    create!: TagCreateWithoutBlogsInput;
}
