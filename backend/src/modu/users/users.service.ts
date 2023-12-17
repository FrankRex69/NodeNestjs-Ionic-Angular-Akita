import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from "../../entities/users.entity";
import { ReadAuthDto } from '../auth/dto/read-auth.dto';
import { CreateUsersDto } from "./dto/create-users.dto";

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users) public repository: Repository<Users>,
  ) {}

  async findAll(): Promise<Users[]> {
      return this.repository.find(
      {
        order: {         
          id: "ASC"
        }
      }
    );
  }

  async findOne(signInData: ReadAuthDto): Promise<Users> {   
    return await this.repository.findOne(
      {select: ['username','password','role'],
       where: {username: signInData.userLogin, password: signInData.passLogin}
      });
  }

  async create(dto: CreateUsersDto): Promise<CreateUsersDto> {
    return this.repository.save(dto);
  }
}
