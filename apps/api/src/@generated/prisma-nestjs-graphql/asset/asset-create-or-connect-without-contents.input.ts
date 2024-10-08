import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { Type } from 'class-transformer';
import { AssetCreateWithoutContentsInput } from './asset-create-without-contents.input';

@InputType()
export class AssetCreateOrConnectWithoutContentsInput {

    @Field(() => AssetWhereUniqueInput, {nullable:false})
    @Type(() => AssetWhereUniqueInput)
    where!: Prisma.AtLeast<AssetWhereUniqueInput, 'id'>;

    @Field(() => AssetCreateWithoutContentsInput, {nullable:false})
    @Type(() => AssetCreateWithoutContentsInput)
    create!: AssetCreateWithoutContentsInput;
}
