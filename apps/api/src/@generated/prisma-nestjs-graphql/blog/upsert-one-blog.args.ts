import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { Type } from 'class-transformer';
import { BlogCreateInput } from './blog-create.input';
import { BlogUpdateInput } from './blog-update.input';

@ArgsType()
export class UpsertOneBlogArgs {

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => BlogCreateInput, {nullable:false})
    @Type(() => BlogCreateInput)
    create!: BlogCreateInput;

    @Field(() => BlogUpdateInput, {nullable:false})
    @Type(() => BlogUpdateInput)
    update!: BlogUpdateInput;
}
