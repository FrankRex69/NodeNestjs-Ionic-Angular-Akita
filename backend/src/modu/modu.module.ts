import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test1Controller } from './entities/test1/test1.controller';
import { Test1 } from './entities/test1/test1.entity';
import { Test1Service } from './entities/test1/test1.service';
import { Test2 } from './entities/test2/test2.entity';
import { UserController } from './entities/user/user.controller';
import { User } from './entities/user/user.entity';
import { UserService } from './entities/user/user.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Test1,
      Test2,
      User
    ]),
  ],
  controllers: [Test1Controller,UserController],
  providers: [Test1Service,UserService]
})
export class ModuModule {}
