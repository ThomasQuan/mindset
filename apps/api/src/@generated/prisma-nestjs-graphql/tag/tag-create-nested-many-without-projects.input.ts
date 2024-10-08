import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TagCreateWithoutProjectsInput } from './tag-create-without-projects.input';
import { Type } from 'class-transformer';
import { TagCreateOrConnectWithoutProjectsInput } from './tag-create-or-connect-without-projects.input';
import { Prisma } from '@prisma/client';
import { TagWhereUniqueInput } from './tag-where-unique.input';

@InputType()
export class TagCreateNestedManyWithoutProjectsInput {

    @Field(() => [TagCreateWithoutProjectsInput], {nullable:true})
    @Type(() => TagCreateWithoutProjectsInput)
    create?: Array<TagCreateWithoutProjectsInput>;

    @Field(() => [TagCreateOrConnectWithoutProjectsInput], {nullable:true})
    @Type(() => TagCreateOrConnectWithoutProjectsInput)
    connectOrCreate?: Array<TagCreateOrConnectWithoutProjectsInput>;

    @Field(() => [TagWhereUniqueInput], {nullable:true})
    @Type(() => TagWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TagWhereUniqueInput, 'id' | 'slug'>>;
}
