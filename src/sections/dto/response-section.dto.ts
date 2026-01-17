import { ApiProperty } from '@nestjs/swagger';
import { MetadataDto } from 'src/common/common/metadata.dto';

export class ResponseSectionDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  isActive: boolean;
}

export class FindAllSectionResponseDto {
  @ApiProperty({ type: [ResponseSectionDto] })
  data: ResponseSectionDto[];
  @ApiProperty({ type: MetadataDto })
  metadata: MetadataDto;
  @ApiProperty()
  message: string;
  @ApiProperty()
  status: number;
}

export class FindOneSectionResponseDto {
  @ApiProperty({ type: ResponseSectionDto })
  data: ResponseSectionDto;
  @ApiProperty()
  message: string;
  @ApiProperty()
  status: number;
}
