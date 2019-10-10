import {
  IEmployeeFieldsToRegister,
  Error,
  IClientFieldsToRegister,
  IClientToLogin,
  IEmployeeToLogin,
  IUserResponseLogin,
  IUser
} from '../models';
import { Client, Employee } from '../../models';

export interface IUserService {
  register(data: IEmployeeFieldsToRegister | IClientFieldsToRegister, originLink?: string): Promise<Error | void>;
  login(data: IClientToLogin | IEmployeeToLogin): Promise<Error | IUserResponseLogin>;
  getCurrent(data: Client | Employee): Promise<Error | IUser>;
}
