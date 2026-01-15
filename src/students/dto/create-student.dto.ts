import {
  IsString,
  IsInt,
  IsOptional,
  IsDateString,
  IsEnum,
  IsBoolean,
  IsEmail,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Gender } from '@prisma/client';

export class CreateStudentDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsInt()
  age: number;

  @ApiProperty()
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

  @ApiProperty()
  @IsString()
  @IsOptional()
  fatherName?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  motherName?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
