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

export interface ISchedule extends Model {
  scheduleId: number;
  serviceId: number;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  startLunch: string;
  endLunch: string;
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

export interface IScheduleCreate {
  dayOfWeek: number;
  endTime: string;
  startTime: string;
  startLunch?: string;
  endLunch?: string;
}

export interface IServiceUpdate {
  numberOfRoom: number;
  floor: number;
  name: string;
  type: string;
  status: string;
  maxPerson: number;
  site?: string;
  price: number;
}
