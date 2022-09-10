import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProvaGenerale {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  campoa: string;

  @Column({nullable: true})
  campob: string;

  @Column({nullable: true})
  campoc: string;

}