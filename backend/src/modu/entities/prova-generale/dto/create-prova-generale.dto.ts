import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { PrimaryGeneratedColumn } from "typeorm";

export class CreateProvaGeneraleDto {
    
  @PrimaryGeneratedColumn()
  id: number;

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
