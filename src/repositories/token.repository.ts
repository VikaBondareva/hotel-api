import { Token } from '../models';
import { TokensNames } from '../enums';
import { config } from '../config';
import { ISaveTokens } from 'interfaces';

export class TokenRepository implements ISaveTokens {
  private getFullKey = (key: string, name: string): string => [key, name].join(':');

  public saveRefresh(refreshId: string, userId: string): void {}

  public saveAccess(access: string, userId: string): void {}

  public saveIdentified(token: string, userId: string): void {}

  private deleteToken(specific: string, token: string): void {}

  public deleteAccessRefresh(tokenId: string): void {}

  public deleteIdentified(userId: string) {}

  public findAccessToken(accessToken: string, tokenId: string): string {
    return '';
  }

  public findIdentifiedToken(userId: string): string {
    return '';
  }

  public findRefreshToken(userId: string, tokenId: string): string {
    return '';
  }
}
