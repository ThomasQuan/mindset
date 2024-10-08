import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentCreateManyInput } from './content-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyContentArgs {

    @Field(() => [ContentCreateManyInput], {nullable:false})
    @Type(() => ContentCreateManyInput)
    data!: Array<ContentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
