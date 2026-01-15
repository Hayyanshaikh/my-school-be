import { PartialType } from '@nestjs/swagger';
import { CreateStudentDto } from './create-student.dto';
import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @ApiProperty()
  @IsString()
  id: string;
}
