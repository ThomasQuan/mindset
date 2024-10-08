import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';
import { Type } from 'class-transformer';
import { ContentUpdateWithoutProjectInput } from './content-update-without-project.input';
import { ContentCreateWithoutProjectInput } from './content-create-without-project.input';

@InputType()
export class ContentUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => ContentWhereUniqueInput, {nullable:false})
    @Type(() => ContentWhereUniqueInput)
    where!: Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>;

    @Field(() => ContentUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ContentUpdateWithoutProjectInput)
    update!: ContentUpdateWithoutProjectInput;

    @Field(() => ContentCreateWithoutProjectInput, {nullable:false})
    @Type(() => ContentCreateWithoutProjectInput)
    create!: ContentCreateWithoutProjectInput;
}
