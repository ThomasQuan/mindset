import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetCreateWithoutContentsInput } from './asset-create-without-contents.input';
import { Type } from 'class-transformer';
import { AssetCreateOrConnectWithoutContentsInput } from './asset-create-or-connect-without-contents.input';
import { AssetUpsertWithWhereUniqueWithoutContentsInput } from './asset-upsert-with-where-unique-without-contents.input';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { AssetUpdateWithWhereUniqueWithoutContentsInput } from './asset-update-with-where-unique-without-contents.input';
import { AssetUpdateManyWithWhereWithoutContentsInput } from './asset-update-many-with-where-without-contents.input';
import { AssetScalarWhereInput } from './asset-scalar-where.input';

@InputType()
export class AssetUpdateManyWithoutContentsNestedInput {

    @Field(() => [AssetCreateWithoutContentsInput], {nullable:true})
    @Type(() => AssetCreateWithoutContentsInput)
    create?: Array<AssetCreateWithoutContentsInput>;

    @Field(() => [AssetCreateOrConnectWithoutContentsInput], {nullable:true})
    @Type(() => AssetCreateOrConnectWithoutContentsInput)
    connectOrCreate?: Array<AssetCreateOrConnectWithoutContentsInput>;

    @Field(() => [AssetUpsertWithWhereUniqueWithoutContentsInput], {nullable:true})
    @Type(() => AssetUpsertWithWhereUniqueWithoutContentsInput)
    upsert?: Array<AssetUpsertWithWhereUniqueWithoutContentsInput>;

    @Field(() => [AssetWhereUniqueInput], {nullable:true})
    @Type(() => AssetWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AssetWhereUniqueInput, 'id'>>;

    @Field(() => [AssetWhereUniqueInput], {nullable:true})
    @Type(() => AssetWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AssetWhereUniqueInput, 'id'>>;

    @Field(() => [AssetWhereUniqueInput], {nullable:true})
    @Type(() => AssetWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AssetWhereUniqueInput, 'id'>>;

    @Field(() => [AssetWhereUniqueInput], {nullable:true})
    @Type(() => AssetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssetWhereUniqueInput, 'id'>>;

    @Field(() => [AssetUpdateWithWhereUniqueWithoutContentsInput], {nullable:true})
    @Type(() => AssetUpdateWithWhereUniqueWithoutContentsInput)
    update?: Array<AssetUpdateWithWhereUniqueWithoutContentsInput>;

    @Field(() => [AssetUpdateManyWithWhereWithoutContentsInput], {nullable:true})
    @Type(() => AssetUpdateManyWithWhereWithoutContentsInput)
    updateMany?: Array<AssetUpdateManyWithWhereWithoutContentsInput>;

    @Field(() => [AssetScalarWhereInput], {nullable:true})
    @Type(() => AssetScalarWhereInput)
    deleteMany?: Array<AssetScalarWhereInput>;
}
