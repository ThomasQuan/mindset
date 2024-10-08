import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutBlogsInput } from './user-update-without-blogs.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutBlogsInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutBlogsInput, {nullable:false})
    @Type(() => UserUpdateWithoutBlogsInput)
    data!: UserUpdateWithoutBlogsInput;
}
