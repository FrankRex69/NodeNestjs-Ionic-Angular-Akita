import { INumberIdEntity } from './base.interface';

export interface IresponseUser extends INumberIdEntity {
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;     
}
