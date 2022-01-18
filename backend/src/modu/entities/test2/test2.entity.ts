import { Column, Entity } from "typeorm";
import { NumberIdEntity } from '../base/base.entity';

@Entity()
export class Test2 extends NumberIdEntity{
    
    @Column()
      campo2: string;

    @Column()
      campo3: string;
    
}