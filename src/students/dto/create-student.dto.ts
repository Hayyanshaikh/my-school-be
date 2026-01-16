import {
  IsString,
  IsInt,
  IsOptional,
  IsDateString,
  IsEnum,
  IsBoolean,
  IsEmail,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Gender } from '@prisma/client';

export class CreateStudentDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  age: number;

  @ApiPropertyOptional()
  @IsDateString()
  @IsOptional()
  birthDate?: string;

  @ApiProperty()
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty()
  @IsString()
  classId: string;

  @ApiProperty()
  @IsString()
  sectionId: string;

  @ApiProperty()
  @IsDateString()
  admissionDate: string;

  @ApiProperty()
  @IsInt()
  rollNo: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  fatherName?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  motherName?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty()
  @IsBoolean()
  isActive?: boolean;
}
