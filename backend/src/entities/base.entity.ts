import { IBaseEntity, INumberIdEntity } from '@commons/interfaces/base.interface';
import {
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn,
  } from 'typeorm';
  
  export class BaseEntity implements IBaseEntity {
    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
    deletedAt: Date;
  }
  
  export class NumberIdEntity extends BaseEntity implements INumberIdEntity {
    @PrimaryGeneratedColumn()
    id: number;
  }
