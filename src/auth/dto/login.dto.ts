import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  @IsEmail()
  @IsOptional()
  @ApiPropertyOptional()
  email?: string;

  @ApiProperty()
  @IsString()
  @MinLength(3)
  @IsOptional()
  @ApiPropertyOptional()
  username?: string;

  @ApiProperty()
  @IsString()
  @MinLength(6)
  password: string;
}
