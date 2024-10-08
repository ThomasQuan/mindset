import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentStatus } from './content-status.enum';

@InputType()
export class EnumContentStatusFieldUpdateOperationsInput {

    @Field(() => ContentStatus, {nullable:true})
    set?: keyof typeof ContentStatus;
}
