import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContentWhereInput } from './content-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyContentArgs {

    @Field(() => ContentWhereInput, {nullable:true})
    @Type(() => ContentWhereInput)
    where?: ContentWhereInput;
}
