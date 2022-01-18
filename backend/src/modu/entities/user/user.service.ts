import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpsertType } from 'typeorm/driver/types/UpsertType';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User) public repository: Repository<User>,
      ) {}

    findAll(): Promise<User[]> {
      return this.repository.find(
       {
           order: {         
             id: "ASC"
           }
        }
       );
    }

    findOne(id: number): Promise<User> {
        return this.repository.findOne(id);
    }

    async create(dto: CreateUserDto): Promise<CreateUserDto> {
        return this.repository.save(dto);
    }
  
    async update(id: number, dto: UpdateUserDto): Promise<UpdateUserDto> {
      const idUser = await this.repository.findOne(id);
      if (!idUser) {
        throw new NotFoundException(`IdUser #${idUser} not found`);
      }
      return await this.repository.save({ ...idUser, ...dto });
    }
  
    async remove(id: number): Promise<DeleteUserDto> {
      const idUser = await this.repository.findOne(id);
      if (!idUser) {
        throw new NotFoundException(`IdUser #${id} not found`);
      }
      return await this.repository.softRemove(idUser);
    }
      
}
