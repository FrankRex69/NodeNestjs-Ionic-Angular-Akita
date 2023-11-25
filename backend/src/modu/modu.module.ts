import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListItemController } from './entities/list-item/list-item.controller';
import { ListItem } from './entities/list-item/list-item.entity';
import { ListItemService } from './entities/list-item/list-item.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      ListItem
    ]),
  ],
  controllers: [ListItemController],
  providers: [ListItemService]
})
export class ModuModule {}
