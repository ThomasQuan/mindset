import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogStatUpdateManyMutationInput } from './blog-stat-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BlogStatWhereInput } from './blog-stat-where.input';

@ArgsType()
export class UpdateManyBlogStatArgs {

    @Field(() => BlogStatUpdateManyMutationInput, {nullable:false})
    @Type(() => BlogStatUpdateManyMutationInput)
    data!: BlogStatUpdateManyMutationInput;

    @Field(() => BlogStatWhereInput, {nullable:true})
    @Type(() => BlogStatWhereInput)
    where?: BlogStatWhereInput;
}
