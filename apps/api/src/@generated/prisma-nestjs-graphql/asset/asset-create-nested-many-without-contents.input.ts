import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetCreateWithoutContentsInput } from './asset-create-without-contents.input';
import { Type } from 'class-transformer';
import { AssetCreateOrConnectWithoutContentsInput } from './asset-create-or-connect-without-contents.input';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';

@InputType()
export class AssetCreateNestedManyWithoutContentsInput {

    @Field(() => [AssetCreateWithoutContentsInput], {nullable:true})
    @Type(() => AssetCreateWithoutContentsInput)
    create?: Array<AssetCreateWithoutContentsInput>;

    @Field(() => [AssetCreateOrConnectWithoutContentsInput], {nullable:true})
    @Type(() => AssetCreateOrConnectWithoutContentsInput)
    connectOrCreate?: Array<AssetCreateOrConnectWithoutContentsInput>;

    @Field(() => [AssetWhereUniqueInput], {nullable:true})
    @Type(() => AssetWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AssetWhereUniqueInput, 'id'>>;
}
