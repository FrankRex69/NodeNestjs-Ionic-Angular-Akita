import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';


export class ReadAuthTokenDto {
  @ApiProperty()
  @IsString()
  status: number;

  @ApiProperty()
  @IsString()
  access_token: string; 
}

export class GetAuthTokenDto {
  @ApiProperty()
  @IsString()
  login_token: string; 
}