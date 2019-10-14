import { Model } from 'sequelize';
export interface IClient extends Model {
  clientId: number;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  phoneCountryId: number;
  gender: string;
  status: number;
  attemptLogin: number;
  loginCode: number | null;
  newEmail: string | null;
  newPhone: string | null;
  createdAt?: string;
  updatedAt?: string;
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
