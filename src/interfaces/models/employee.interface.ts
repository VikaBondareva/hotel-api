import { Model } from 'sequelize';
import { StatusUsers } from '../../enums';
export interface IEmployee extends Model {
  employeeId: string;
  name: string;
  surname: string;
  email: string;
  password: string;
  phoneNumber: string;
  status: StatusUsers;
  created_at: Date;
  updated_at: Date;
}

export interface IEmployeeFieldsToRegister {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  positionId: number;
  permissions: number;
}

export interface IEmployeeResponse {
  employeeId: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  status: StatusUsers;
  created_at: string;
  updated_at: string;
}

export interface IEmployeeToLogin {
  email: string;
  password: string;
}
