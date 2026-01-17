import { ApiProperty } from '@nestjs/swagger';

export class MetadataDto {
  @ApiProperty()
  maxLimit: number;

  @ApiProperty()
  total: number;

  @ApiProperty()
  totalRecords: number;
}
