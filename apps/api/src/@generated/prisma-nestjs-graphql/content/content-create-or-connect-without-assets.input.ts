import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';
import { Type } from 'class-transformer';
import { ContentCreateWithoutAssetsInput } from './content-create-without-assets.input';

@InputType()
export class ContentCreateOrConnectWithoutAssetsInput {

    @Field(() => ContentWhereUniqueInput, {nullable:false})
    @Type(() => ContentWhereUniqueInput)
    where!: Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>;

    @Field(() => ContentCreateWithoutAssetsInput, {nullable:false})
    @Type(() => ContentCreateWithoutAssetsInput)
    create!: ContentCreateWithoutAssetsInput;
}
