import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateListItemDto } from './dto/create-list-item.dto';
import { DeleteListItemDto} from './dto/delete-list-item.dto';
import { UpdateListItemDto } from './dto/update-list-item.dto';
import { ListItem } from '../../entities/list-item.entity';

@Injectable()
export class ListItemService {
    
  constructor(
      @InjectRepository(ListItem) public repository: Repository<ListItem>,
    ) {}

  findAll(): Promise<ListItem[]> {
      return this.repository.find(
      {
        order: {         
          id: "ASC"
        }
      }
    );
  }

  findOne(id: number): Promise<ListItem> {
    return this.repository.findOne(id);
  }

  async create(dto: CreateListItemDto): Promise<CreateListItemDto> {
    return this.repository.save(dto);
  }

  async update(id: number, dto: UpdateListItemDto): Promise<UpdateListItemDto> {
    const listItem = await this.repository.findOne(id);
    if (!listItem) {
      throw new NotFoundException(`ListItem #${id} not found`);
    }
    return await this.repository.save({ ...listItem, ...dto });
  }

  async remove(id: number): Promise<ListItem> {
    const listItem = await this.repository.findOne(id);
    if (!listItem) {
      throw new NotFoundException(`Commission #${id} not found`);
    }
    return await this.repository.softRemove(listItem);
  }
    
}
