import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Inject, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { CreateUsersDto } from './dto/create-users.dto';

import { UsersService } from './users.service';
import { Roles } from '../auth/decorators/roles.decorator';
import { RoleGuard } from '../auth/roles.guard';
import { Role } from '@commons/interfaces/login.interface';


@ApiTags('Users')
@Controller('users')
export class UsersController {  
  
  @Inject(UsersService) public readonly service: UsersService;
 
  @Post()
  @ApiBearerAuth('access-token')
  @UseGuards(RoleGuard)
  @Roles(Role.Admin)
  create(@Body() dto: CreateUsersDto): Promise<CreateUsersDto> {
    return this.service.create(dto);
  }

}


