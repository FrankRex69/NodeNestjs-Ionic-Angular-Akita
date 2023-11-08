import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ReadAuthDto {
  @ApiProperty()
  @IsString()
  userLogin: string;

  @ApiProperty()
  @IsString()
  passLogin: string;
}