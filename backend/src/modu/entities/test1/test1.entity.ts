import { Column, Entity } from "typeorm";
import { NumberIdEntity } from '../base/base.entity';

@Entity()
export class Test1 extends NumberIdEntity{
    
    @Column({nullable: true})
      campo1: string;  

    @Column({nullable: true})
      campo2: string; 
}

