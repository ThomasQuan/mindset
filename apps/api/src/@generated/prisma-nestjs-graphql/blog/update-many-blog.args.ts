import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogUpdateManyMutationInput } from './blog-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BlogWhereInput } from './blog-where.input';

@ArgsType()
export class UpdateManyBlogArgs {

    @Field(() => BlogUpdateManyMutationInput, {nullable:false})
    @Type(() => BlogUpdateManyMutationInput)
    data!: BlogUpdateManyMutationInput;

    @Field(() => BlogWhereInput, {nullable:true})
    @Type(() => BlogWhereInput)
    where?: BlogWhereInput;
}
