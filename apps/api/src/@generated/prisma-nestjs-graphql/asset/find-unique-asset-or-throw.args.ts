import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AssetWhereUniqueInput } from './asset-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAssetOrThrowArgs {

    @Field(() => AssetWhereUniqueInput, {nullable:false})
    @Type(() => AssetWhereUniqueInput)
    where!: Prisma.AtLeast<AssetWhereUniqueInput, 'id'>;
}
