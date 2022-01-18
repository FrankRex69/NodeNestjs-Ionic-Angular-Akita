import { Column, Entity } from "typeorm";
import { NumberIdEntity } from '../base/base.entity';

@Entity()
export class Test1 extends NumberIdEntity{
    
    @Column()
      campo1: string;  
}