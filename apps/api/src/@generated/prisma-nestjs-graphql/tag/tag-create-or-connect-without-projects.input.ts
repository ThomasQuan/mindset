import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';
import { Type } from 'class-transformer';
import { TagCreateWithoutProjectsInput } from './tag-create-without-projects.input';

@InputType()
export class TagCreateOrConnectWithoutProjectsInput {

    @Field(() => TagWhereUniqueInput, {nullable:false})
    @Type(() => TagWhereUniqueInput)
    where!: Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => TagCreateWithoutProjectsInput, {nullable:false})
    @Type(() => TagCreateWithoutProjectsInput)
    create!: TagCreateWithoutProjectsInput;
}
