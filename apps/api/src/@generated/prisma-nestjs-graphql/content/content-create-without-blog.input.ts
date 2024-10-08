import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentStatus } from '../prisma/content-status.enum';
import { Int } from '@nestjs/graphql';
import { ProjectCreateNestedOneWithoutContentsInput } from '../project/project-create-nested-one-without-contents.input';
import { AssetCreateNestedManyWithoutContentsInput } from '../asset/asset-create-nested-many-without-contents.input';

@InputType()
export class ContentCreateWithoutBlogInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    markdownContent!: string;

    @Field(() => String, {nullable:false})
    htmlContent!: string;

    @Field(() => ContentStatus, {nullable:true})
    status?: keyof typeof ContentStatus;

    @Field(() => Int, {nullable:false})
    orderNo!: number;

    @Field(() => String, {nullable:false})
    objectAs!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => ProjectCreateNestedOneWithoutContentsInput, {nullable:true})
    project?: ProjectCreateNestedOneWithoutContentsInput;

    @Field(() => AssetCreateNestedManyWithoutContentsInput, {nullable:true})
    assets?: AssetCreateNestedManyWithoutContentsInput;
}
