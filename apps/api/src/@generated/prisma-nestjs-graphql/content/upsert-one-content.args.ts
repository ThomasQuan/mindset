import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';
import { Type } from 'class-transformer';
import { ContentCreateInput } from './content-create.input';
import { ContentUpdateInput } from './content-update.input';

@ArgsType()
export class UpsertOneContentArgs {

    @Field(() => ContentWhereUniqueInput, {nullable:false})
    @Type(() => ContentWhereUniqueInput)
    where!: Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>;

    @Field(() => ContentCreateInput, {nullable:false})
    @Type(() => ContentCreateInput)
    create!: ContentCreateInput;

    @Field(() => ContentUpdateInput, {nullable:false})
    @Type(() => ContentUpdateInput)
    update!: ContentUpdateInput;
}
