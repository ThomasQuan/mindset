import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  firstName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  lastName?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  status?: string;

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
