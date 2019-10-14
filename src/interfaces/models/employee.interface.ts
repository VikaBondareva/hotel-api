import { Model } from 'sequelize';
import { StatusUsers } from '../../enums';
export interface IEmployee extends Model {
  employeeId: number;
  name: string;
  surname: string;
  phoneNumber: string;
  email: string;
  status: string;
  password: string;
  positionId: number;
  permissions: number;
  createdAt: string;
  updatedAt: string;
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
