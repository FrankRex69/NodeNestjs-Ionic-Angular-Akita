import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ListItem } from './list-item.entity';

import { CreateListItemDto } from './dto/create-list-item.dto';
import { DeleteListItemDto } from './dto/delete-list-item.dto';
import { UpdateListItemDto} from './dto/update-list-item.dto';

import { IresponseListItem } from '@commons/interfaces/list-item.interface';

import { ListItemService } from './list-item.service';
import { Public } from '../auth/decorators/public.decorator';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@commons/interfaces/login.interface';



@ApiTags('ListItem')
@Controller('list-item')
export class ListItemController {  
  
  @Inject(ListItemService) public readonly service: ListItemService;
  
  @Roles(Role.Admin)
  @UseGuards(RoleGuard)
  @Get()
  public async findAll(): Promise<IresponseListItem[]> {
    console.log('rffffffffffff');    
    return await this.service.findAll();
  }

  @Roles(Role.Admin)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<IresponseListItem> {
    return this.service.findOne(id);
  }  
  
  @Roles(Role.Admin)
  @UseGuards(RoleGuard)
  @Post()
  create(@Body() dto: CreateListItemDto): Promise<CreateListItemDto> {
    return this.service.create(dto);
  }

  @Roles(Role.Admin)
  @UseGuards(RoleGuard)
  @Patch(':id')  
  update(@Param('id', ParseIntPipe) id: number,@Body() dto: UpdateListItemDto): Promise<UpdateListItemDto> {
    return this.service.update(id, dto);
  } 

  @Roles(Role.Admin)
  @Delete(':id')  
  remove(@Param('id', ParseIntPipe) id: number): Promise<IresponseListItem> {   
    return this.service.remove(id);
  }

}


