import jwt from 'jsonwebtoken';
import uuid from 'uuid/v4';
import { config } from '../config';
import { ITokens, ISaveTokens, IEmployee } from '../interfaces';
import { TokenRepository } from '../repositories';

class Tokens {
  private _tokensToDB: ISaveTokens;

  public constructor(refreshToDB: ISaveTokens) {
    this._tokensToDB = refreshToDB;
  }

  public generationTokens(id: number, role: string): ITokens {
    return {
      accessToken: this.generateAccessToken(id, role),
      refreshToken: this.generateRefreshToken(id, role)
    };
  }

  public generateIdentifiedToken(employeeId: number, role: string): string {
    const token = this.generate(employeeId, config.jwt.identifiedExpiration, role);
    this._tokensToDB.saveIdentified(token, employeeId);

    return token;
  }

  public deleteTokens(tokenId: string): void {
    this._tokensToDB.deleteAccessRefresh(tokenId);
  }

  public deleteIdentifiedToken(userId: number): void {
    this._tokensToDB.deleteIdentified(userId);
  }

  private generateAccessToken(userId: number, role: string): string {
    const tokenId = uuid();
    const token = this.generate(userId, config.jwt.accessExpiration, role, tokenId);
    this._tokensToDB.saveAccess(tokenId, userId);
    return token;
  }

  private generateRefreshToken(userId: number, role: string): string {
    const tokenId = uuid();
    this._tokensToDB.saveRefresh(tokenId, userId);
    return this.generate(userId, config.jwt.refreshExpiration, role, tokenId);
  }

  private generate(sub: number, expiresIn: number, role: string, id?: string): string {
    let payload: { sub: number; role: string; id?: string } = { sub, role };
    if (id) {
      payload.id = id;
    }

    const token = jwt.sign(payload, config.jwt.secret, { expiresIn });

    return token;
  }
}

export const JsonTokens: Tokens = new Tokens(new TokenRepository());
