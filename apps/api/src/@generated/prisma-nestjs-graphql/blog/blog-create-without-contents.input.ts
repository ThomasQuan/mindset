import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogStatus } from '../prisma/blog-status.enum';
import { UserCreateNestedOneWithoutBlogsInput } from '../user/user-create-nested-one-without-blogs.input';
import { TagCreateNestedManyWithoutBlogsInput } from '../tag/tag-create-nested-many-without-blogs.input';
import { BlogStatCreateNestedOneWithoutBlogInput } from '../blog-stat/blog-stat-create-nested-one-without-blog.input';

@InputType()
export class BlogCreateWithoutContentsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    subtitle?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    hasEdited?: boolean;

    @Field(() => BlogStatus, {nullable:true})
    status?: keyof typeof BlogStatus;

    @Field(() => UserCreateNestedOneWithoutBlogsInput, {nullable:false})
    author!: UserCreateNestedOneWithoutBlogsInput;

    @Field(() => TagCreateNestedManyWithoutBlogsInput, {nullable:true})
    tags?: TagCreateNestedManyWithoutBlogsInput;

    @Field(() => BlogStatCreateNestedOneWithoutBlogInput, {nullable:true})
    blogStat?: BlogStatCreateNestedOneWithoutBlogInput;
}
