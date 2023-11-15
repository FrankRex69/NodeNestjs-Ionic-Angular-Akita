export interface IBaseEntity {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  version: number;
}
  
export interface INumberIdEntity extends IBaseEntity {
  id: number;
}