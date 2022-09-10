import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvaGenerale } from './entities/prova-generale/entities/prova-generale.entity';
import { ProvaGeneraleController } from './entities/prova-generale/prova-generale.controller';
import { ProvaGeneraleService } from './entities/prova-generale/prova-generale.service';
import { Test1Controller } from './entities/test1/test1.controller';
import { Test1 } from './entities/test1/test1.entity';
import { Test1Service } from './entities/test1/test1.service';
import { UserController } from './entities/user/user.controller';
import { User } from './entities/user/user.entity';
import { UserService } from './entities/user/user.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Test1,
      User,
      ProvaGenerale
    ]),
  ],
  controllers: [Test1Controller,UserController,ProvaGeneraleController],
  providers: [Test1Service,UserService,ProvaGeneraleService]
})
export class ModuModule {}
