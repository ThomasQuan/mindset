import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { Type } from 'class-transformer';
import { AssetUpdateWithoutContentsInput } from './asset-update-without-contents.input';

@InputType()
export class AssetUpdateWithWhereUniqueWithoutContentsInput {

    @Field(() => AssetWhereUniqueInput, {nullable:false})
    @Type(() => AssetWhereUniqueInput)
    where!: Prisma.AtLeast<AssetWhereUniqueInput, 'id'>;

    @Field(() => AssetUpdateWithoutContentsInput, {nullable:false})
    @Type(() => AssetUpdateWithoutContentsInput)
    data!: AssetUpdateWithoutContentsInput;
}
