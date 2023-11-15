import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test1Controller } from './entities/test1/test1.controller';
import { Test1 } from './entities/test1/test1.entity';
import { Test1Service } from './entities/test1/test1.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Test1
    ]),
  ],
  controllers: [Test1Controller],
  providers: [Test1Service]
})
export class ModuModule {}
