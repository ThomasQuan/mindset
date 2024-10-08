import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogStatCreateManyInput } from './blog-stat-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBlogStatArgs {

    @Field(() => [BlogStatCreateManyInput], {nullable:false})
    @Type(() => BlogStatCreateManyInput)
    data!: Array<BlogStatCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
