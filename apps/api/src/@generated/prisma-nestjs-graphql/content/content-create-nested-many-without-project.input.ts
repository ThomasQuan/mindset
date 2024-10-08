import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentCreateWithoutProjectInput } from './content-create-without-project.input';
import { Type } from 'class-transformer';
import { ContentCreateOrConnectWithoutProjectInput } from './content-create-or-connect-without-project.input';
import { ContentCreateManyProjectInputEnvelope } from './content-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';

@InputType()
export class ContentCreateNestedManyWithoutProjectInput {

    @Field(() => [ContentCreateWithoutProjectInput], {nullable:true})
    @Type(() => ContentCreateWithoutProjectInput)
    create?: Array<ContentCreateWithoutProjectInput>;

    @Field(() => [ContentCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ContentCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ContentCreateOrConnectWithoutProjectInput>;

    @Field(() => ContentCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ContentCreateManyProjectInputEnvelope)
    createMany?: ContentCreateManyProjectInputEnvelope;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;
}
