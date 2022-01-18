import { Column, Entity } from "typeorm";
import { NumberIdEntity } from '../base/base.entity';

@Entity()
export class User extends NumberIdEntity{    
    
    @Column()
      name: string;  
    
    @Column()
      surname: string; 
    
    @Column()
      username: string;
    
    @Column()
      email: string;
    
    @Column()
      password: string;

}