import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';
import { Type } from 'class-transformer';
import { ContentCreateWithoutProjectInput } from './content-create-without-project.input';

@InputType()
export class ContentCreateOrConnectWithoutProjectInput {

    @Field(() => ContentWhereUniqueInput, {nullable:false})
    @Type(() => ContentWhereUniqueInput)
    where!: Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>;

    @Field(() => ContentCreateWithoutProjectInput, {nullable:false})
    @Type(() => ContentCreateWithoutProjectInput)
    create!: ContentCreateWithoutProjectInput;
}
