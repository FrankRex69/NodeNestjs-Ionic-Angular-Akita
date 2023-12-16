import { IBaseEntity, INumberIdEntity } from '@commons/interfaces/base.interface';
import {
    CreateDateColumn,
    DeleteDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    VersionColumn,
  } from 'typeorm';
  
  export class BaseEntity implements IBaseEntity {
  //export class BaseEntity {
    @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
    updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
    deletedAt: Date;
  
    @VersionColumn({ name: 'version', nullable: true })
    version: number;
  }
  
  export class NumberIdEntity extends BaseEntity implements INumberIdEntity {
  //export class NumberIdEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  }

// import { IBaseEntity, INumberIdEntity } from '@commons/interfaces/base';
// import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

// export class BaseEntity implements IBaseEntity {
//   @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
//   createdAt: Date;

//   @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
//   updatedAt: Date;

//   @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp' })
//   deletedAt: Date;

//   @VersionColumn({ name: 'version', nullable: true })
//   version: number;
// }

// export class NumberIdEntity extends BaseEntity implements INumberIdEntity {
//   @PrimaryGeneratedColumn()
//   id: number;
//}
