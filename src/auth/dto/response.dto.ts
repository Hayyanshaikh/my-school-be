import { ApiProperty } from '@nestjs/swagger';
import { CustomResponseDto } from 'src/common/common/customResponse.dto';

export class LoginResponseData {
  @ApiProperty()
  id: string;

  @ApiProperty()
  username: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  role: string;
}
export class LoginResponseDto extends CustomResponseDto {
  @ApiProperty()
  data: LoginResponseData;

  @ApiProperty()
  access_token: string;
}
