import { Sequelize } from 'sequelize';
import { config } from './environment';
import seedingMongo from './seeds';
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
  Complaints,
  ComplaintsEmployees,
  Services
} from '../models';
const { database } = config;

export const sequelize = new Sequelize(database.name, database.login, database.password, {
  dialect: 'mssql',
  host: database.host,
  port: database.port
});

const setRelationships = async () => {
  Positions.hasMany(Employee, { as: 'employees', foreignKey: 'positionId' });
  Employee.hasOne(IdentifiedToken, { foreignKey: 'employeeId' });
  Rooms.belongsToMany(Additions, { through: AdditionsRooms, foreignKey: 'roomId', onDelete: 'CASCADE' });
  Additions.belongsToMany(Rooms, { through: AdditionsRooms, foreignKey: 'additionId' });
  Countries.hasMany(Client, { foreignKey: 'phoneCountryId' });

  Client.hasMany(Bookings, { foreignKey: 'clientId' });
  Rooms.hasMany(Bookings, { foreignKey: 'roomId' });

  Client.hasOne(Complaints, { foreignKey: 'clientId' });
  Employee.hasMany(ComplaintsEmployees, { foreignKey: 'employeeId' });
  Complaints.hasMany(ComplaintsEmployees, { foreignKey: 'complaintId' });
};

export function initializeDb(callback: (sequelize: Sequelize) => void): void {
  sequelize
    .authenticate()
    .then((): void => {
      console.log('Connection has been established successfully.');
      logger.info('Connection has been established successfully.');

      Employee.initTable(sequelize, Sequelize);
      Client.initTable(sequelize, Sequelize);
      Additions.initTable(sequelize, Sequelize);
      Countries.initTable(sequelize, Sequelize);
      Rooms.initTable(sequelize, Sequelize);
      IdentifiedToken.initTable(sequelize, Sequelize);
      Token.initTable(sequelize, Sequelize);
      Positions.initTable(sequelize, Sequelize);
      AdditionsRooms.initTable(sequelize, Sequelize);
      Bookings.initTable(sequelize, Sequelize);
      Complaints.initTable(sequelize, Sequelize);
      ComplaintsEmployees.initTable(sequelize, Sequelize);
      Services.initTable(sequelize, Sequelize);

      setRelationships();

      sequelize
        .sync()
        .then(() => {
          seedingMongo();
        })
        .catch((err: any): void => {
          throw new Error(err);
        });
    })
    .then(() => {
      callback(sequelize);
    })
    .catch((err: any): void => {
      console.error('Unable to connect to the database:', err);
      logger.error(err.toString());
      process.exit(1);
    });
}
