import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentCreateWithoutAssetsInput } from './content-create-without-assets.input';
import { Type } from 'class-transformer';
import { ContentCreateOrConnectWithoutAssetsInput } from './content-create-or-connect-without-assets.input';
import { Prisma } from '@prisma/client';
import { ContentWhereUniqueInput } from './content-where-unique.input';

@InputType()
export class ContentCreateNestedManyWithoutAssetsInput {

    @Field(() => [ContentCreateWithoutAssetsInput], {nullable:true})
    @Type(() => ContentCreateWithoutAssetsInput)
    create?: Array<ContentCreateWithoutAssetsInput>;

    @Field(() => [ContentCreateOrConnectWithoutAssetsInput], {nullable:true})
    @Type(() => ContentCreateOrConnectWithoutAssetsInput)
    connectOrCreate?: Array<ContentCreateOrConnectWithoutAssetsInput>;

    @Field(() => [ContentWhereUniqueInput], {nullable:true})
    @Type(() => ContentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContentWhereUniqueInput, 'id' | 'slug' | 'slug_blogId_projectId_objectAs'>>;
}
