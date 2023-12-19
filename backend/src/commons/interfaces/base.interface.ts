export interface IBaseEntity {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
  
export interface INumberIdEntity extends IBaseEntity {
  id: number;
}