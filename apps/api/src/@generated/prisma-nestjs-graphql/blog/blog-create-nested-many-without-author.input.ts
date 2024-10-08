import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogCreateWithoutAuthorInput } from './blog-create-without-author.input';
import { Type } from 'class-transformer';
import { BlogCreateOrConnectWithoutAuthorInput } from './blog-create-or-connect-without-author.input';
import { BlogCreateManyAuthorInputEnvelope } from './blog-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { BlogWhereUniqueInput } from './blog-where-unique.input';

@InputType()
export class BlogCreateNestedManyWithoutAuthorInput {

    @Field(() => [BlogCreateWithoutAuthorInput], {nullable:true})
    @Type(() => BlogCreateWithoutAuthorInput)
    create?: Array<BlogCreateWithoutAuthorInput>;

    @Field(() => [BlogCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => BlogCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<BlogCreateOrConnectWithoutAuthorInput>;

    @Field(() => BlogCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => BlogCreateManyAuthorInputEnvelope)
    createMany?: BlogCreateManyAuthorInputEnvelope;

    @Field(() => [BlogWhereUniqueInput], {nullable:true})
    @Type(() => BlogWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<BlogWhereUniqueInput, 'id' | 'slug'>>;
}
