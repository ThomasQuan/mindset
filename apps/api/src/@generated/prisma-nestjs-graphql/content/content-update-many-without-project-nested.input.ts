import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentCreateWithoutProjectInput } from './content-create-without-project.input';
import { Type } from 'class-transformer';
import { ContentCreateOrConnectWithoutProjectInput } from './content-create-or-connect-without-project.input';
import { ContentUpsertWithWhereUniqueWithoutProjectInput } from './content-upsert-with-where-unique-without-project.input';
import { ContentCreateManyProjectInputEnvelope } from './content-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';
import { ContentUpdateWithWhereUniqueWithoutProjectInput } from './content-update-with-where-unique-without-project.input';
import { ContentUpdateManyWithWhereWithoutProjectInput } from './content-update-many-with-where-without-project.input';
import { ContentScalarWhereInput } from './content-scalar-where.input';

@InputType()
export class ContentUpdateManyWithoutProjectNestedInput {

    @Field(() => [ContentCreateWithoutProjectInput], {nullable:true})
    @Type(() => ContentCreateWithoutProjectInput)
    create?: Array<ContentCreateWithoutProjectInput>;

    @Field(() => [ContentCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ContentCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ContentCreateOrConnectWithoutProjectInput>;

    @Field(() => [ContentUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ContentUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<ContentUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => ContentCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ContentCreateManyProjectInputEnvelope)
    createMany?: ContentCreateManyProjectInputEnvelope;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;

    @Field(() => [ContentUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ContentUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<ContentUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [ContentUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => ContentUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<ContentUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [ContentScalarWhereInput], {nullable:true})
    @Type(() => ContentScalarWhereInput)
    deleteMany?: Array<ContentScalarWhereInput>;
}
