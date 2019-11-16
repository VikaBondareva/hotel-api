import { Model } from 'sequelize';

export interface IService extends Model {
  serviceId: number;
  numberOfRoom: number;
  floor: number;
  name: string;
  type: string;
  status: string;
  maxPerson: number;
  site: string;
  price: number;
}

export interface IServiceCreate {
  numberOfRoom: number;
  floor: number;
  name: string;
  type: string;
  maxPerson: number;
  site: string;
  price: number;
}

export interface IServiceUpdate {
  numberOfRoom: number;
  floor: number;
  name: string;
  type: string;
  status: string;
  maxPerson: number;
  site: string;
  price: number;
}
