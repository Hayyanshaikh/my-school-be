import { ApiProperty } from '@nestjs/swagger';
import { MetadataDto } from 'src/common/common/metadata.dto';

export class MessageDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  role: 'user' | 'assistant';

  @ApiProperty()
  text: string;
}

export class ResponseAcademixDto {
  @ApiProperty()
  data: MessageDto;

  @ApiProperty()
  message: string;

  @ApiProperty()
  status: boolean;

  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  metadata: MetadataDto;
}
