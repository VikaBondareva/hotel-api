import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Roles } from '../enums';
import { config } from './environment';
import { TokenRepository, EmployeeRepository, ClientRepository } from '../repositories';
import { IClient, IEmployee, ISaveTokens } from '../interfaces';

export class Passport {
  private static Token: ISaveTokens = new TokenRepository();

  public static jwtStrategy(): void {
    let option = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwt.secret
    };

    passport.use(
      'refresh-jwt',
      new Strategy(
        option,
        async (token: any, done: (error: any, user?: IEmployee | IClient, info?: string) => void) => {
          const tokenRefresh = await this.Token.findRefreshToken(token.sub, token.id);
          if (!tokenRefresh) {
            return done(null);
          }
          this.Token.deleteAccessRefresh(token.id);
          return Passport.getUser(token.role, token.sub).then(user => {
            if (user) {
              return done(null, user, token.role);
            } else {
            }
          });
        }
      )
    );

    passport.use(
      'identified-jwt',
      new Strategy(option, async (token: any, done: (error: any, user?: IEmployee | boolean) => void) => {
        const identified = await this.Token.findIdentifiedToken(token.sub);
        let user = null;
        if (identified) {
          user = await EmployeeRepository.findById(token.sub);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null);
        }
      })
    );

    passport.use(
      new Strategy(
        option,
        async (token: any, done: (error: any, user?: IEmployee | IClient, info?: string) => void) => {
          // const isValid = await this.Token.findRefreshToken(token.sub, token.id);
          // if (!isValid) {
          //   return done(null);
          // }
          return Passport.getUser(token.role, token.sub).then(user => {
            if (user) {
              return done(null, user, token.role);
            } else {
              return done(null);
            }
          });
        }
      )
    );
  }

  private static async getUser(role: string, userId: string): Promise<IClient | IEmployee | null> {
    let user: IClient | IEmployee | null;
    if (role === Roles.Client) {
      user = await ClientRepository.findById(userId);
    } else {
      user = await EmployeeRepository.findById(userId);
    }
    return user;
  }
}

export const initialize = () => passport.initialize();
export const authenticateJwt = () => passport.authenticate('jwt', { session: false });
export const authenticateRefreshJwt = () => passport.authenticate('refresh-jwt', { session: false });
export const authenticateIdentifiedToken = () => passport.authenticate('identified-jwt', { session: false });
