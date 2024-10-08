import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { BlogStatus } from '../prisma/blog-status.enum';
import { User } from '../user/user.model';
import { Tag } from '../tag/tag.model';
import { Content } from '../content/content.model';
import { BlogStat } from '../blog-stat/blog-stat.model';
import { BlogCount } from './blog-count.output';

@ObjectType()
export class Blog {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:true})
    subtitle!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    hasEdited!: boolean;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => BlogStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof BlogStatus;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;

    @Field(() => [Content], {nullable:true})
    contents?: Array<Content>;

    @Field(() => BlogStat, {nullable:true})
    blogStat?: BlogStat | null;

    @Field(() => BlogCount, {nullable:false})
    _count?: BlogCount;
}
