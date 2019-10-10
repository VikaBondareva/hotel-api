import { Model } from 'sequelize';

export interface IEmployee extends Model {
  employeeId: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  phoneNumber: string;
  status: number;
  identifiedToken?: string;
  created_at: Date;
  updated_at: Date;
}

export interface IEmployeeFieldsToRegister {
  name: string;
  surname: string;
  patronymic: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export interface IEmployeeToLogin {
  email: string;
  password: string;
}
