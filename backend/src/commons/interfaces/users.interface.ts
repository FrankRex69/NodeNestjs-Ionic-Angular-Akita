import { INumberIdEntity } from './base.interface';

export enum Role {
    Admin = 'admin',
    Customer = 'customer',
}

export interface IresponseUser extends INumberIdEntity {
    username: string;
    password: string;
    role: string    
}

export interface IcreateUsersDTO {
   username: string;
   password: string;
}