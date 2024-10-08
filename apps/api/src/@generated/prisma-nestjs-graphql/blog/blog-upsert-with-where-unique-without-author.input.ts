import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';
import { Type } from 'class-transformer';
import { BlogUpdateWithoutAuthorInput } from './blog-update-without-author.input';
import { BlogCreateWithoutAuthorInput } from './blog-create-without-author.input';

@InputType()
export class BlogUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => BlogWhereUniqueInput, {nullable:false})
    @Type(() => BlogWhereUniqueInput)
    where!: Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => BlogUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => BlogUpdateWithoutAuthorInput)
    update!: BlogUpdateWithoutAuthorInput;

    @Field(() => BlogCreateWithoutAuthorInput, {nullable:false})
    @Type(() => BlogCreateWithoutAuthorInput)
    create!: BlogCreateWithoutAuthorInput;
}
