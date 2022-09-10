import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProvaGeneraleDto } from './dto/create-prova-generale.dto';
import { UpdateProvaGeneraleDto } from './dto/update-prova-generale.dto';
import { ProvaGenerale } from './entities/prova-generale.entity';

@Injectable()
export class ProvaGeneraleService {
  
  //repository: any;
  constructor(
    @InjectRepository(ProvaGenerale) public repository: Repository<ProvaGenerale>
  ) {}

  async create(createProvaGeneraleDto: CreateProvaGeneraleDto): Promise<CreateProvaGeneraleDto> {  
    console.log(createProvaGeneraleDto.campoa);
    console.log(createProvaGeneraleDto.campob); 
    //return 'This action adds a new provaGenerale';
    return this.repository.save(createProvaGeneraleDto);
  }

  // async create(dto: CreateCommissionDto): Promise<Commission> {
  //   return this.repository.save(dto);
  // }

  findAll(): Promise<ProvaGenerale[]> {
    return this.repository.find(
      {
        order: {         
        id: "ASC"
        }
     }
    );
  }
  // findAll() {
  //   //return `This action returns all provaGenerale`;
  //   return this.repository.find(
  //     {
  //       order: {         
  //         id: "ASC"
  //       }
  //     }
  //    );
  // }

  findOne(id: number) {
    return `This action returns a #${id} provaGenerale`;
  }

  // update(id: number, updateProvaGeneraleDto: UpdateProvaGeneraleDto) {
  //   return `This action updates a #${id} provaGenerale`;
  // }

  async update(id: number, dto: UpdateProvaGeneraleDto): Promise<UpdateProvaGeneraleDto> {
    const prova = await this.repository.findOne(id);
    if (!prova) {
      throw new NotFoundException(`Prova #${id} not found`);
    }
    return await this.repository.save({ ...prova, ...dto });
  }

  remove(id: number) {
    return `This action removes a #${id} provaGenerale`;
  }
}
