import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Users } from "../../entities/users.entity";
import { ReadAuthDto } from '../auth/dto/read-auth.dto';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(Users) public repository: Repository<Users>,
  ) {}

  async findOne(signInData: ReadAuthDto): Promise<Users> {    
    
    console.log('qqqq: ' , await this.repository.findOne({select: ['username','password','role'], where: {username: signInData.userLogin, password: signInData.passLogin}}));
  
    return await this.repository.findOne({select: ['username','password','role'], where: {username: signInData.userLogin, password: signInData.passLogin}});

  }
}
