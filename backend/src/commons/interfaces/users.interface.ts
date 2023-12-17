import { INumberIdEntity } from './base.interface';

export interface IresponseUser extends INumberIdEntity {
    username: string;
    password: string;
    role: string    
}
