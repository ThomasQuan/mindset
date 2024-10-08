import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentCreateWithoutAssetsInput } from './content-create-without-assets.input';
import { Type } from 'class-transformer';
import { ContentCreateOrConnectWithoutAssetsInput } from './content-create-or-connect-without-assets.input';
import { ContentUpsertWithWhereUniqueWithoutAssetsInput } from './content-upsert-with-where-unique-without-assets.input';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';
import { ContentUpdateWithWhereUniqueWithoutAssetsInput } from './content-update-with-where-unique-without-assets.input';
import { ContentUpdateManyWithWhereWithoutAssetsInput } from './content-update-many-with-where-without-assets.input';
import { ContentScalarWhereInput } from './content-scalar-where.input';

@InputType()
export class ContentUncheckedUpdateManyWithoutAssetsNestedInput {

    @Field(() => [ContentCreateWithoutAssetsInput], {nullable:true})
    @Type(() => ContentCreateWithoutAssetsInput)
    create?: Array<ContentCreateWithoutAssetsInput>;

    @Field(() => [ContentCreateOrConnectWithoutAssetsInput], {nullable:true})
    @Type(() => ContentCreateOrConnectWithoutAssetsInput)
    connectOrCreate?: Array<ContentCreateOrConnectWithoutAssetsInput>;

    @Field(() => [ContentUpsertWithWhereUniqueWithoutAssetsInput], {nullable:true})
    @Type(() => ContentUpsertWithWhereUniqueWithoutAssetsInput)
    upsert?: Array<ContentUpsertWithWhereUniqueWithoutAssetsInput>;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;

    @Field(() => [ContentUpdateWithWhereUniqueWithoutAssetsInput], {nullable:true})
    @Type(() => ContentUpdateWithWhereUniqueWithoutAssetsInput)
    update?: Array<ContentUpdateWithWhereUniqueWithoutAssetsInput>;

    @Field(() => [ContentUpdateManyWithWhereWithoutAssetsInput], {nullable:true})
    @Type(() => ContentUpdateManyWithWhereWithoutAssetsInput)
    updateMany?: Array<ContentUpdateManyWithWhereWithoutAssetsInput>;

    @Field(() => [ContentScalarWhereInput], {nullable:true})
    @Type(() => ContentScalarWhereInput)
    deleteMany?: Array<ContentScalarWhereInput>;
}
