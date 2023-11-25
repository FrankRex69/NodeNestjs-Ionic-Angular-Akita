import { INumberIdEntity } from './base.interface';

export interface IresponseListItem extends INumberIdEntity {    
    campo1: string;
    campo2: string;
}

export interface IupdateFormDTO extends INumberIdEntity {
    campo1: string;
    campo2: string;
}

export interface IcreateFormDTO {
    campo1: string;
    campo2: string;
}