import { INumberIdEntity } from './base.interface';

export enum Role {
  Admin = 'admin',
  Customer = 'customer',
}
    
export interface IresponseLogin {
    userLogin: string;
    passLogin: string;
    role: Role;
}

export interface IcreateUsersDTO {
  username: string;
  password: string;
}
