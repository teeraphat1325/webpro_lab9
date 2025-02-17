import { ArrayNotEmpty, IsArray, IsEmail, IsNotEmpty, Length, MinLength } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 32)
  password: string;

  @IsNotEmpty()
  @Length(4, 32)
  fullName: string;

  @IsArray()
  @ArrayNotEmpty()
  roles: ('admin' | 'user')[];

  @IsNotEmpty()
  gender: 'male' | 'female' | 'others';
}
