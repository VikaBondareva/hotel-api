import { Model } from 'sequelize';
export interface IClient extends Model {
  clientId: string;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  status: number;
  attemptLogin: number;
  loginCode: number | null;
  created_at: Date;
  updated_at: Date;
}

export interface IClientFieldsToRegister {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
}

export interface IClientToLogin {
  phoneNumber: string;
  loginCode: number;
}
