import {
  IsString,
  IsEmail,
  IsBoolean,
  IsPhoneNumber,
  IsNumber,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly firstName: string;

  @IsString()
  readonly lastName: string;

  @IsEmail()
  readonly email: string;

  @IsPhoneNumber('ZZ')
  readonly phone: string;

  @IsBoolean()
  readonly isAdmin: boolean;

  @IsBoolean()
  readonly verified: boolean;
}
