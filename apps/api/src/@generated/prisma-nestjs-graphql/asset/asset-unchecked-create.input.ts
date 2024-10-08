import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ContentUncheckedCreateNestedManyWithoutAssetsInput } from '../content/content-unchecked-create-nested-many-without-assets.input';

@InputType()
export class AssetUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Int, {nullable:true})
    width?: number;

    @Field(() => Int, {nullable:true})
    height?: number;

    @Field(() => String, {nullable:true})
    resolution?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ContentUncheckedCreateNestedManyWithoutAssetsInput, {nullable:true})
    contents?: ContentUncheckedCreateNestedManyWithoutAssetsInput;
}
