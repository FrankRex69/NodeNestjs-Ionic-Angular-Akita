import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTest1Dto {
  @ApiProperty()
  @IsString()
  campo1: string;

  @ApiProperty()
  @IsString()
  campo2: string;
}