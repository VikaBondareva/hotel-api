import { Token } from '../models';
import { TokensNames } from '../enums';
import { config } from '../config';
import { ISaveTokens } from 'interfaces';

export class TokenRepository implements ISaveTokens {
  private getFullKey = (key: string, name: string): string => [key, name].join(':');

  public saveRefresh(refreshId: string, userId: number): void {}

  public saveAccess(access: string, userId: number): void {}

  public saveIdentified(token: string, userId: number): void {}

  private deleteToken(specific: string, token: string): void {}

  public deleteAccessRefresh(tokenId: string): void {}

  public deleteIdentified(userId: number) {}

  public findAccessToken(accessToken: string, tokenId: string): string {
    return '';
  }

  public findIdentifiedToken(userId: number): string {
    return '';
  }

  public findRefreshToken(userId: number, tokenId: string): string {
    return '';
  }
}
