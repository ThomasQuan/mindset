import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsStrongPassword } from 'class-validator';
import { Role } from 'src/modules/role/entities/role.entity';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  fullName: string;

  @Field()
  email: string;

  @Field()
  @IsStrongPassword()
  password: string;

  @Field()
  status: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  headline?: string;

  @Field({ nullable: true })
  lastActiveAt?: Date;

  @Field({ nullable: true })
  avatarURL?: string;

  @Field(() => Role, { nullable: true })
  role?: Role;

  // @Field(() => [Blog])
  // blogs: Blog[];

  // @Field(() => [Project])
  // projects: Project[];
}
