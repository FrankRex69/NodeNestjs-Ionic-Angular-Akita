export interface IResponseProvaGenerale {
    id: number;
    campoa: string;
    campob: string;
    campoc: string;
}

export interface ICreateProvaGeneraleDto {
    id: number;
    campoa: string;
    campob: string;
    campoc: string;
}

export interface IUpdateProvaGeneraleDto extends Partial<ICreateProvaGeneraleDto> {}