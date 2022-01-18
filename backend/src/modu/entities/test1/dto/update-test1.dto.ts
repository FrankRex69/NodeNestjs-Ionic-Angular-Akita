import { PartialType } from '@nestjs/swagger';

import { CreateTest1Dto } from './create-test1.dto'; 

export class UpdateTest1Dto extends PartialType(CreateTest1Dto) {}