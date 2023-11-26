import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListItemController } from './list-item/list-item.controller';

import { ListItemService } from './list-item/list-item.service';

import { ListItem } from '../entities/list-item.entity';
import { Users } from '../entities/users.entity';
import { UsersService } from './users/users.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([ListItem]),
  ],
  controllers: [ListItemController],
  providers: [ListItemService]
})
export class ModuModule {}
