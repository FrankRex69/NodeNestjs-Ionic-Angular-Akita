// import { PartialType } from '@nestjs/mapped-types';
// import { CreateProvaGeneraleDto } from './create-prova-generale.dto';

// export class UpdateProvaGeneraleDto extends PartialType(CreateProvaGeneraleDto) {}




import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class UpdateProvaGeneraleDto {  

  @ApiProperty()
  @IsString()
  campoa: string;

  @ApiProperty()
  @IsString()
  campob: string;

  @ApiProperty()
  @IsString()
  campoc: string;
}
