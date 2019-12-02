import { Model } from 'sequelize';

export interface IAddition extends Model {
  additionsId: number;
  name: string;
  price: number;
}

export interface IAdditionCreate {
  additionsId: number;
  name: string;
  price: number;
}
