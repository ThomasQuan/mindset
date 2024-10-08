import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { ProjectStatus } from '../prisma/project-status.enum';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Tag } from '../tag/tag.model';
import { Content } from '../content/content.model';
import { ProjectCount } from './project-count.output';

@ObjectType()
export class Project {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

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

    @Field(() => String, {nullable:true})
    gitRepoLink!: string | null;

    @Field(() => String, {nullable:true})
    projectLink!: string | null;

    @Field(() => String, {nullable:true})
    designLink!: string | null;

    @Field(() => ProjectStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof ProjectStatus;

    @Field(() => Int, {nullable:false})
    orderNo!: number;

    @Field(() => String, {nullable:false})
    objectAs!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => User, {nullable:false})
    author?: User;

    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;

    @Field(() => [Content], {nullable:true})
    contents?: Array<Content>;

    @Field(() => ProjectCount, {nullable:false})
    _count?: ProjectCount;
}
