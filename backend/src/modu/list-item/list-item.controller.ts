import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { CreateListItemDto } from './dto/create-list-item.dto';
import { DeleteListItemDto } from './dto/delete-list-item.dto';
import { UpdateListItemDto} from './dto/update-list-item.dto';

import { IresponseListItem } from '@commons/interfaces/list-item.interface';

import { ListItemService } from './list-item.service';
import { Public } from '../auth/decorators/public.decorator';
import { AuthGuard } from '../auth/auth.guard';
import { RoleGuard } from '../auth/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@commons/interfaces/users.interface';

@ApiTags('List Item')
@Controller('list-item')
export class ListItemController {  
  
  @Inject(ListItemService) public readonly service: ListItemService;

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(RoleGuard)
  @Roles(Role.Admin) 
  public async findAll(): Promise<IresponseListItem[]> {       
    return await this.service.findAll();
  }
  
  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(RoleGuard)
  @Roles(Role.Admin)  
  findOne(@Param('id', ParseIntPipe) id: number): Promise<IresponseListItem> {
    return this.service.findOne(id);
  }  
  
  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(RoleGuard)
  @Roles(Role.Admin)
  create(@Body() dto: CreateListItemDto): Promise<CreateListItemDto> {
    return this.service.create(dto);
  }

  @Patch(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(RoleGuard)
  @Roles(Role.Admin)   
  update(@Param('id', ParseIntPipe) id: number,@Body() dto: UpdateListItemDto): Promise<UpdateListItemDto> {
    return this.service.update(id, dto);
  } 

  @Delete(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(RoleGuard)
  @Roles(Role.Admin)   
  remove(@Param('id', ParseIntPipe) id: number): Promise<IresponseListItem> {   
    return this.service.remove(id);
  }

}


