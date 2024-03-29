import express, { Response, Request, NextFunction } from 'express';
import morgan from 'morgan';
import router from './routes';
import { initializeDb, Passport, initialize, logger, config } from './config';

class App {
  public app: express.Application;

  public constructor() {
    this.app = express();
    if (config.app.environment !== 'test') {
      this.app.use(
        morgan('tiny', {
          stream: {
            write: function(message: string, encoding?: string): void {
              logger.info(message, encoding);
            }
          }
        })
      );
    }

    this.app.use(morgan('dev'));
    this.configCors();
    this.config();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(initialize());
    Passport.jwtStrategy();
    this.app.use('/api/', router);
    this.app.get('*', function(req: Request, res: Response, next: NextFunction) {
      const err: any = new Error('Page Not Found');
      err.statusCode = 404;
      next(err);
    });

    this.app.use(function(err: any, req: Request, res: Response, next: NextFunction) {
      if (!err.statusCode) err.statusCode = 500;
      res.status(err.statusCode).json({ message: err.message });
    });
    initializeDb((): void => {});
  }

  private configCors(): void {
    this.app.use((req: Request, res: Response, next: NextFunction): void => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
      res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin,Accepts');
      next();
    });
  }
}

export default new App().app;
