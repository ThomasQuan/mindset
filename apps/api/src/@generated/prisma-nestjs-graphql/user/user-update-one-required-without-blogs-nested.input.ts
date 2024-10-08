import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBlogsInput } from './user-create-without-blogs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBlogsInput } from './user-create-or-connect-without-blogs.input';
import { UserUpsertWithoutBlogsInput } from './user-upsert-without-blogs.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutBlogsInput } from './user-update-to-one-with-where-without-blogs.input';

@InputType()
export class UserUpdateOneRequiredWithoutBlogsNestedInput {

    @Field(() => UserCreateWithoutBlogsInput, {nullable:true})
    @Type(() => UserCreateWithoutBlogsInput)
    create?: UserCreateWithoutBlogsInput;

    @Field(() => UserCreateOrConnectWithoutBlogsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBlogsInput)
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput;

    @Field(() => UserUpsertWithoutBlogsInput, {nullable:true})
    @Type(() => UserUpsertWithoutBlogsInput)
    upsert?: UserUpsertWithoutBlogsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutBlogsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutBlogsInput)
    update?: UserUpdateToOneWithWhereWithoutBlogsInput;
}
