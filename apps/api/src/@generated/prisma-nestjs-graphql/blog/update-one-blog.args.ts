import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BlogUpdateInput } from './blog-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';

@ArgsType()
export class UpdateOneBlogArgs {

    @Field(() => BlogUpdateInput, {nullable:false})
    @Type(() => BlogUpdateInput)
    data!: BlogUpdateInput;

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>;
}
