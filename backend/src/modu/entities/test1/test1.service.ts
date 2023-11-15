import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTest1Dto } from './dto/create-test1.dto';
import { DeleteTest1Dto } from './dto/delete-test1.dto';
import { UpdateTest1Dto } from './dto/update-test1.dto';
import { Test1 } from './test1.entity';

@Injectable()
export class Test1Service {
    
  constructor(
      @InjectRepository(Test1) public repository: Repository<Test1>,
    ) {}

  findAll(): Promise<Test1[]> {
      return this.repository.find(
      {
        order: {         
          id: "ASC"
        }
      }
    );
  }

  findOne(id: number): Promise<Test1> {
    return this.repository.findOne(id);
  }

  async create(dto: CreateTest1Dto): Promise<CreateTest1Dto> {
    return this.repository.save(dto);
  }

  async update(id: number, dto: UpdateTest1Dto): Promise<UpdateTest1Dto> {
    const test1 = await this.repository.findOne(id);
    if (!test1) {
      throw new NotFoundException(`Test1 #${id} not found`);
    }
    return await this.repository.save({ ...test1, ...dto });
  }

  async remove(id: number): Promise<Test1> {
    const test1 = await this.repository.findOne(id);
    if (!test1) {
      throw new NotFoundException(`Commission #${id} not found`);
    }
    return await this.repository.softRemove(test1);
  }
    
}
