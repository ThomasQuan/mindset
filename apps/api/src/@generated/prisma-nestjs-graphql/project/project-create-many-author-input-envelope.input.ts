import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateManyAuthorInput } from './project-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectCreateManyAuthorInputEnvelope {

    @Field(() => [ProjectCreateManyAuthorInput], {nullable:false})
    @Type(() => ProjectCreateManyAuthorInput)
    data!: Array<ProjectCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
