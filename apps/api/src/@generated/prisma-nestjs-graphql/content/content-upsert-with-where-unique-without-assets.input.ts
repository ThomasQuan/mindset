import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';
import { Type } from 'class-transformer';
import { ContentUpdateWithoutAssetsInput } from './content-update-without-assets.input';
import { ContentCreateWithoutAssetsInput } from './content-create-without-assets.input';

@InputType()
export class ContentUpsertWithWhereUniqueWithoutAssetsInput {

    @Field(() => ContentWhereUniqueInput, {nullable:false})
    @Type(() => ContentWhereUniqueInput)
    where!: Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>;

    @Field(() => ContentUpdateWithoutAssetsInput, {nullable:false})
    @Type(() => ContentUpdateWithoutAssetsInput)
    update!: ContentUpdateWithoutAssetsInput;

    @Field(() => ContentCreateWithoutAssetsInput, {nullable:false})
    @Type(() => ContentCreateWithoutAssetsInput)
    create!: ContentCreateWithoutAssetsInput;
}
