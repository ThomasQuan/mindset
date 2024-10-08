import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentCreateManyProjectInput } from './content-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class ContentCreateManyProjectInputEnvelope {

    @Field(() => [ContentCreateManyProjectInput], {nullable:false})
    @Type(() => ContentCreateManyProjectInput)
    data!: Array<ContentCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
