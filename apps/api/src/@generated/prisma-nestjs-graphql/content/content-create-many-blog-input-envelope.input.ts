import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContentCreateManyBlogInput } from './content-create-many-blog.input';
import { Type } from 'class-transformer';

@InputType()
export class ContentCreateManyBlogInputEnvelope {

    @Field(() => [ContentCreateManyBlogInput], {nullable:false})
    @Type(() => ContentCreateManyBlogInput)
    data!: Array<ContentCreateManyBlogInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
