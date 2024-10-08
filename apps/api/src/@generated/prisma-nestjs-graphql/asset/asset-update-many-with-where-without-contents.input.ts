import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetScalarWhereInput } from './asset-scalar-where.input';
import { Type } from 'class-transformer';
import { AssetUpdateManyMutationInput } from './asset-update-many-mutation.input';

@InputType()
export class AssetUpdateManyWithWhereWithoutContentsInput {

    @Field(() => AssetScalarWhereInput, {nullable:false})
    @Type(() => AssetScalarWhereInput)
    where!: AssetScalarWhereInput;

    @Field(() => AssetUpdateManyMutationInput, {nullable:false})
    @Type(() => AssetUpdateManyMutationInput)
    data!: AssetUpdateManyMutationInput;
}
