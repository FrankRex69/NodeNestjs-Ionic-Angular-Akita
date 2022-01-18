import { Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IresponseUser } from '../../../commons/interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('User')
@Controller('user')
export class UserController {

  @Inject(UserService) public readonly service: UserService;

  @Get()
  public async findAll(): Promise<IresponseUser[]> {
    const prg = await this.service.findAll();
    return prg;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<IresponseUser> {
    return this.service.findOne(id);
  }
    
  @Post()  
  create(@Body() dto: CreateUserDto): Promise<CreateUserDto> {
    return this.service.create(dto);
  }  

  @Patch(':id')  
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    return this.service.update(id, dto);
  } 
  
//   @Delete(':id')
//   //@Roles(UserRole.Admin)
//   remove(@Param('id', ParseIntPipe) id: number): Promise<IresponseUser> {
//     return this.service.remove(id);
//   }

}
