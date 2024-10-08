import { InputType, Field } from '@nestjs/graphql';
import {
  IsAlpha,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { UserStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/user-status.enum';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty({ message: 'First name is required' })
  @IsString()
  @IsAlpha('en-US', {
    message: 'Invalid first name: only letters are allowed',
  })
  firstName: string;

  @Field()
  @IsNotEmpty({ message: 'Last name is required' })
  @IsString()
  @IsAlpha('en-US', {
    message: 'Invalid last name: only letters are allowed',
  })
  lastName: string;

  @Field()
  @IsNotEmpty({ message: 'Full name is required' })
  @IsString()
  fullName: string;

  @Field()
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty({ message: 'Password is required' })
  @IsString()
  @IsStrongPassword()
  password: string;

  @Field(() => UserStatus)
  @IsNotEmpty({ message: 'Status is required' })
  @IsEnum(UserStatus)
  status: UserStatus;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  title?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  headline?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  avatarURL?: string;

  @Field()
  @IsNotEmpty({ message: 'Role is required' })
  @IsString()
  roleId: string;
}
