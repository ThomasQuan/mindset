import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BlogStatus } from '../prisma/blog-status.enum';
import { TagUncheckedCreateNestedManyWithoutBlogsInput } from '../tag/tag-unchecked-create-nested-many-without-blogs.input';
import { ContentUncheckedCreateNestedManyWithoutBlogInput } from '../content/content-unchecked-create-nested-many-without-blog.input';
import { BlogStatUncheckedCreateNestedOneWithoutBlogInput } from '../blog-stat/blog-stat-unchecked-create-nested-one-without-blog.input';

@InputType()
export class BlogUncheckedCreateWithoutAuthorInput {

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

    @Field(() => TagUncheckedCreateNestedManyWithoutBlogsInput, {nullable:true})
    tags?: TagUncheckedCreateNestedManyWithoutBlogsInput;

    @Field(() => ContentUncheckedCreateNestedManyWithoutBlogInput, {nullable:true})
    contents?: ContentUncheckedCreateNestedManyWithoutBlogInput;

    @Field(() => BlogStatUncheckedCreateNestedOneWithoutBlogInput, {nullable:true})
    blogStat?: BlogStatUncheckedCreateNestedOneWithoutBlogInput;
}
