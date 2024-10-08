import { InputType, Field } from '@nestjs/graphql';
import {
  IsAlpha,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserStatus } from 'src/@generated/prisma-nestjs-graphql/prisma/user-status.enum';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsAlpha('en-US', {
    message: 'Invalid first name: only letters are allowed',
  })
  firstName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  @IsAlpha('en-US', {
    message: 'Invalid last name: only letters are allowed',
  })
  lastName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEnum(UserStatus)
  status?: UserStatus;

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
  lastActiveAt?: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  avatarURL?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  roleId?: string;
}
