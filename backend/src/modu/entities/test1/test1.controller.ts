import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { Test1 } from './test1.entity';

import { CreateTest1Dto } from './dto/create-test1.dto';
import { DeleteTest1Dto } from './dto/delete-test1.dto';
import { UpdateTest1Dto } from './dto/update-test1.dto';

import { IresponseTest1 } from '../../../commons/interfaces/test1.interface';

import { Test1Service } from './test1.service';
import { Public } from '../auth/decorators/public.decorator';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@commons/interfaces/login.interface';

console.log('sssss' , Role.Admin);


@ApiTags('Test1')
@Controller('test1')
export class Test1Controller {  
  
  @Inject(Test1Service) public readonly service: Test1Service;  
  
  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(RoleGuard)
  @Roles(Role.Admin)  
  public async findAll(): Promise<IresponseTest1[]> {
    return await this.service.findAll();
  }

  
  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(RoleGuard)
  @Roles(Role.Admin)
  findOne(@Param('id', ParseIntPipe) id: number): Promise<IresponseTest1> {
    return this.service.findOne(id);
  }  
  
  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(RoleGuard)
  @Roles(Role.Admin)  
  create(@Body() dto: CreateTest1Dto): Promise<CreateTest1Dto> {
    return this.service.create(dto);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(RoleGuard)
  @Roles(Role.Admin)     
  update(@Param('id', ParseIntPipe) id: number,@Body() dto: UpdateTest1Dto): Promise<UpdateTest1Dto> {
    return this.service.update(id, dto);
  } 

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(RoleGuard)
  @Roles(Role.Admin)  
  remove(@Param('id', ParseIntPipe) id: number): Promise<IresponseTest1> {   
    return this.service.remove(id);
  }

}


