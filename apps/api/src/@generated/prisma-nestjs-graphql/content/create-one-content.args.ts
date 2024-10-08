import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentCreateInput } from './content-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneContentArgs {

    @Field(() => ContentCreateInput, {nullable:false})
    @Type(() => ContentCreateInput)
    data!: ContentCreateInput;
}
