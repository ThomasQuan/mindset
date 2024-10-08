import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ContentStatus } from '../prisma/content-status.enum';
import { Int } from '@nestjs/graphql';
import { Blog } from '../blog/blog.model';
import { Project } from '../project/project.model';
import { Asset } from '../asset/asset.model';
import { ContentCount } from './content-count.output';

@ObjectType()
export class Content {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    markdownContent!: string;

    @Field(() => String, {nullable:false})
    htmlContent!: string;

    @Field(() => ContentStatus, {nullable:false,defaultValue:'VISIBLE'})
    status!: keyof typeof ContentStatus;

    @Field(() => Int, {nullable:false})
    orderNo!: number;

    @Field(() => String, {nullable:false})
    objectAs!: string;

    @Field(() => String, {nullable:true})
    blogId!: string | null;

    @Field(() => String, {nullable:true})
    projectId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Blog, {nullable:true})
    blog?: Blog | null;

    @Field(() => Project, {nullable:true})
    project?: Project | null;

    @Field(() => [Asset], {nullable:true})
    assets?: Array<Asset>;

    @Field(() => ContentCount, {nullable:false})
    _count?: ContentCount;
}
