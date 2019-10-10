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
  saveRefresh(refreshId: string, userId: string, role?: string): void;
  saveIdentified(token: string, userId: string): void;

  saveAccess(access: string, userId: string): void;

  deleteAccessRefresh(tokenId: string): void;
  deleteIdentified(userId: string): void;

  findAccessToken(key: string, value?: string): string;
  findRefreshToken(key: string, value?: string): string;
  findIdentifiedToken(key: string): string;
}
