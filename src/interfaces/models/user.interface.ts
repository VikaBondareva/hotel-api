import { IEmployeeResponse, IClient } from './index';

export interface IEmployeeResponseLogin {
  user: IEmployeeResponse;
  tokens: IUserResponseTokens;
}

export interface IClientResponseLogin {
  user: IClient;
  tokens: IUserResponseTokens;
}

export interface IUserResponseTokens {
  accessToken: string;
  refreshToken: string;
  access_expires_in: number;
}
