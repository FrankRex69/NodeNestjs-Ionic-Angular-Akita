import { INumberIdEntity } from './base.interface';

export interface IresponseLogin extends INumberIdEntity {
    userLogin: string;
    passLogin: string;    
}
