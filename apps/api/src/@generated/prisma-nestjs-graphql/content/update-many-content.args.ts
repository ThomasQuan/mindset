import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentUpdateManyMutationInput } from './content-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ContentWhereInput } from './content-where.input';

@ArgsType()
export class UpdateManyContentArgs {

    @Field(() => ContentUpdateManyMutationInput, {nullable:false})
    @Type(() => ContentUpdateManyMutationInput)
    data!: ContentUpdateManyMutationInput;

    @Field(() => ContentWhereInput, {nullable:true})
    @Type(() => ContentWhereInput)
    where?: ContentWhereInput;
}
