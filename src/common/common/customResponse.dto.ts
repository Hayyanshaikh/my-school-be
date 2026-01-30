import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { MetadataDto } from './metadata.dto';

export class CustomResponseDto {
  @ApiProperty()
  message: string;

  @ApiProperty()
  status: number;

  @ApiProperty({ type: MetadataDto })
  @ApiPropertyOptional()
  metadata?: MetadataDto;
}
