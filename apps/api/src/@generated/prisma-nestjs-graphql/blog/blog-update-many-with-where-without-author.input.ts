import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogScalarWhereInput } from './blog-scalar-where.input';
import { Type } from 'class-transformer';
import { BlogUpdateManyMutationInput } from './blog-update-many-mutation.input';

@InputType()
export class BlogUpdateManyWithWhereWithoutAuthorInput {

    @Field(() => BlogScalarWhereInput, {nullable:false})
    @Type(() => BlogScalarWhereInput)
    where!: BlogScalarWhereInput;

    @Field(() => BlogUpdateManyMutationInput, {nullable:false})
    @Type(() => BlogUpdateManyMutationInput)
    data!: BlogUpdateManyMutationInput;
}
