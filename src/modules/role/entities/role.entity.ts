import { ObjectType, Field, ID, GraphQLISODateTime } from '@nestjs/graphql';
import { Slug } from 'src/decorators/slug';
import { Permission } from 'src/modules/permission/entities/permission.entity';
import { User } from 'src/modules/user/entities/user.entity';

@ObjectType()
export class Role {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  @Slug('title')
  slug: string;

  @Field(() => String)
  description: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;

  @Field(() => GraphQLISODateTime)
  updatedAt: Date;

  @Field(() => [User], { nullable: true })
  users?: User[];

  @Field(() => [Permission], { nullable: true })
  permissions?: Permission[];
}
