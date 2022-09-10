import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProvaGeneraleService } from './prova-generale.service';
import { CreateProvaGeneraleDto } from './dto/create-prova-generale.dto';
import { UpdateProvaGeneraleDto } from './dto/update-prova-generale.dto';
import { ApiTags } from '@nestjs/swagger';
import { ProvaGenerale } from './entities/prova-generale.entity';

@ApiTags('prova-generale')
@Controller('prova-generale')
export class ProvaGeneraleController {
  constructor(private readonly provaGeneraleService: ProvaGeneraleService) {}

  @Post()
  create(@Body() createProvaGeneraleDto: CreateProvaGeneraleDto): Promise<ProvaGenerale> {    
    return this.provaGeneraleService.create(createProvaGeneraleDto);
  }

  // @Post()
  // @Roles(UserRole.Admin)
  // create(@Body() dto: CreateCommissionDto): Promise<Commission> {
  //   return this.service.create(dto);
  // }

  @Get()
  findAll() {
    return this.provaGeneraleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.provaGeneraleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProvaGeneraleDto: UpdateProvaGeneraleDto) {
    return this.provaGeneraleService.update(+id, updateProvaGeneraleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.provaGeneraleService.remove(+id);
  }
}
