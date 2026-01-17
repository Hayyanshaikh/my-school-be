import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateSectionDto } from './create-section.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateSectionDto extends PartialType(CreateSectionDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;
}
