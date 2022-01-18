import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTest1Dto {
  @ApiProperty()
  @IsString()
  campo1: string;
}