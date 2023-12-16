import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListItemController } from './list-item/list-item.controller';

import { ListItemService } from './list-item/list-item.service';

import { ListItem } from '../entities/list-item.entity';
import { Users } from '../entities/users.entity';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([ListItem, Users]),
  ],
  controllers: [ListItemController, UsersController],
  providers: [ListItemService, UsersService]
})
export class ModuModule {}
