import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagUpdateWithoutProjectsInput } from './tag-update-without-projects.input';

@InputType()
export class TagUpdateWithWhereUniqueWithoutProjectsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => TagUpdateWithoutProjectsInput, {nullable:false})
    @Type(() => TagUpdateWithoutProjectsInput)
    data!: TagUpdateWithoutProjectsInput;
}
