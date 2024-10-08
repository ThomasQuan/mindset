import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentScalarWhereInput } from './content-scalar-where.input';
import { Type } from 'class-transformer';
import { ContentUpdateManyMutationInput } from './content-update-many-mutation.input';

@InputType()
export class ContentUpdateManyWithWhereWithoutProjectInput {

    @Field(() => ContentScalarWhereInput, {nullable:false})
    @Type(() => ContentScalarWhereInput)
    where!: ContentScalarWhereInput;

    @Field(() => ContentUpdateManyMutationInput, {nullable:false})
    @Type(() => ContentUpdateManyMutationInput)
    data!: ContentUpdateManyMutationInput;
}
