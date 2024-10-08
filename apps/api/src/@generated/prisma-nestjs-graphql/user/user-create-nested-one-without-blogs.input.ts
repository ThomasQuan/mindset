import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBlogsInput } from './user-create-without-blogs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBlogsInput } from './user-create-or-connect-without-blogs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutBlogsInput {

    @Field(() => UserCreateWithoutBlogsInput, {nullable:true})
    @Type(() => UserCreateWithoutBlogsInput)
    create?: UserCreateWithoutBlogsInput;

    @Field(() => UserCreateOrConnectWithoutBlogsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBlogsInput)
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
