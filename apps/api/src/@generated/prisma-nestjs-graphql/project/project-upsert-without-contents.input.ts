import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutContentsInput } from './project-update-without-contents.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutContentsInput } from './project-create-without-contents.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutContentsInput {

    @Field(() => ProjectUpdateWithoutContentsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutContentsInput)
    update!: ProjectUpdateWithoutContentsInput;

    @Field(() => ProjectCreateWithoutContentsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutContentsInput)
    create!: ProjectCreateWithoutContentsInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
