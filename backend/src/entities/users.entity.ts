import { Column, Entity } from "typeorm";
import { NumberIdEntity } from './base.entity';

@Entity()
export class Users extends NumberIdEntity{
    
    @Column({nullable: true})
      username: string;  

    @Column({nullable: true})
      password: string;

    @Column({default:"admin", nullable: true})
       role: string;
      
}