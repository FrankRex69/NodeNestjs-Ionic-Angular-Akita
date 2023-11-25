import { Column, Entity } from "typeorm";
import { NumberIdEntity } from './base.entity';

@Entity()
export class Users extends NumberIdEntity{
    
    @Column({nullable: true})
      campo1: string;  

    @Column({nullable: true})
      campo2: string; 
}