import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentUpdateInput } from './content-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';

@ArgsType()
export class UpdateOneContentArgs {

    @Field(() => ContentUpdateInput, {nullable:false})
    @Type(() => ContentUpdateInput)
    data!: ContentUpdateInput;

    @Field(() => ContentWhereUniqueInput, {nullable:false})
    @Type(() => ContentWhereUniqueInput)
    where!: Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>;
}
