import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutContentsInput } from './project-update-without-contents.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutContentsInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutContentsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutContentsInput)
    data!: ProjectUpdateWithoutContentsInput;
}
