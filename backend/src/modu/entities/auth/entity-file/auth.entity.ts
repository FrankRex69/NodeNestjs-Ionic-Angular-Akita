import { Column, Entity } from "typeorm";
import { NumberIdEntity } from '../../base/base.entity';

@Entity()
export class Auth extends NumberIdEntity{
    
    @Column({nullable: true})
      user: string;  

    @Column({nullable: true})
      pass: string; 
}
