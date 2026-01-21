import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAcademixDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  prompt: string;
}
