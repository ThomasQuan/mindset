import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetWhereInput } from './asset-where.input';

@InputType()
export class AssetListRelationFilter {

    @Field(() => AssetWhereInput, {nullable:true})
    every?: AssetWhereInput;

    @Field(() => AssetWhereInput, {nullable:true})
    some?: AssetWhereInput;

    @Field(() => AssetWhereInput, {nullable:true})
    none?: AssetWhereInput;
}
