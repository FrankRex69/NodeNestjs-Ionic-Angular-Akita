import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { Test1 } from './test1.entity';

import { CreateTest1Dto } from './dto/create-test1.dto';
import { DeleteTest1Dto } from './dto/delete-test1.dto';
import { UpdateTest1Dto } from './dto/update-test1.dto';

import { IresponseTest1 } from '../../../commons/interfaces/test1.interface';

import { Test1Service } from './test1.service';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Test1')
@Controller('test1')
export class Test1Controller {

  @Inject(Test1Service) public readonly service: Test1Service;

  @Get()
  public async findAll(): Promise<IresponseTest1[]> {
    const prg = await this.service.findAll();
    return prg;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<IresponseTest1> {
    return this.service.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateTest1Dto): Promise<CreateTest1Dto> {
    return this.service.create(dto);
  }

  @Patch(':id')  
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTest1Dto,
  ): Promise<UpdateTest1Dto> {
    return this.service.update(id, dto);
  } 
  
  @Delete(':id')
  //@Roles(UserRole.Admin)
  remove(@Param('id', ParseIntPipe) id: number): Promise<IresponseTest1> {
    return this.service.remove(id);
  }

}


