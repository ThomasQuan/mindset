import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutBlogsInput } from './user-update-without-blogs.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBlogsInput } from './user-create-without-blogs.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutBlogsInput {

    @Field(() => UserUpdateWithoutBlogsInput, {nullable:false})
    @Type(() => UserUpdateWithoutBlogsInput)
    update!: UserUpdateWithoutBlogsInput;

    @Field(() => UserCreateWithoutBlogsInput, {nullable:false})
    @Type(() => UserCreateWithoutBlogsInput)
    create!: UserCreateWithoutBlogsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
