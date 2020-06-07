import { Sequelize } from 'sequelize';
import { config } from './environment';
import logger from './winston';
import {
  Employee,
  Client,
  Additions,
  Countries,
  Token,
  IdentifiedToken,
  Rooms,
  Positions,
  AdditionsRooms,
  Bookings,
  ComplaintsEmployees,
  Services,
  Payment,
  Tasks,
  Discount,
  Schedule,
  Vacations,
  AccessToken
} from '../models';
const { database } = config;

export const sequelize = new Sequelize(database.name, database.login, database.password, {
  dialect: 'mssql',
  host: database.host,
  port: database.port,
  logging: false,
  dialectOptions: {
    ssl: true
  }
});

export async function initializeDb(callback: (sequelize: Sequelize) => void): Promise<void> {
  try {
    await sequelize.authenticate();

    const models = {
      Additions: Additions.initTable(sequelize),
      AdditionsRooms: AdditionsRooms.initTable(sequelize),
      Bookings: Bookings.initTable(sequelize),
      Client: Client.initTable(sequelize),
      Countries: Countries.initTable(sequelize),
      ComplaintsEmployees: ComplaintsEmployees.initTable(sequelize),
      Discount: Discount.initTable(sequelize),
      Employee: Employee.initTable(sequelize),
      Tasks: Tasks.initTable(sequelize),
      Positions: Positions.initTable(sequelize),
      Payment: Payment.initTable(sequelize),
      IdentifiedToken: IdentifiedToken.initTable(sequelize),
      Rooms: Rooms.initTable(sequelize),
      Services: Services.initTable(sequelize),
      Schedule: Schedule.initTable(sequelize),
      Token: Token.initTable(sequelize),
      AccessToken: AccessToken.initTable(sequelize),
      Vacations: Vacations.initTable(sequelize)
    };

    Object.values(models).forEach((model: any): void => {
      if (typeof model.associate === 'function') model.associate(models);
    });

    await sequelize.sync();
    logger.info(`Postgre: Connection has been established successfully`);

    return callback(sequelize);
  } catch (err) {
    logger.error('Sequelize: Unable to connect to the database: ' + err.toString());
    process.exit(1);
  }
}
