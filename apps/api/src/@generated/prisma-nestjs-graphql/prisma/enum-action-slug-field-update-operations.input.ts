import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActionSlug } from './action-slug.enum';

@InputType()
export class EnumActionSlugFieldUpdateOperationsInput {

    @Field(() => ActionSlug, {nullable:true})
    set?: keyof typeof ActionSlug;
}
