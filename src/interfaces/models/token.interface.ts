import { Model } from 'sequelize';

export interface ITokenModel extends Model {
  tokenId: string;
  userId: string;
  role: string;
  isValid: boolean;
}

export interface ITokenIdentified extends Model {
  tokenId: string;
  token: string;
  userId: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface ISaveTokens {
  saveRefresh(refreshId: string, userId: number, role?: string): void;
  saveIdentified(token: string, userId: number): void;

  saveAccess(access: string, userId: number): void;

  deleteAccessRefresh(tokenId: string): void;
  deleteIdentified(userId: number): void;

  findAccessToken(key: string, value?: string): string;
  findRefreshToken(key: number, value?: string): string;
  findIdentifiedToken(key: number): string;
}
