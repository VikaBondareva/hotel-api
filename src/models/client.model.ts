import DataTypes, { Model } from 'sequelize';
import { StatusUsersArray, Validate, CountAttempt } from '../enums';

export class Client extends Model {
  public clientId!: number;
  public name!: string;
  public surname!: string;
  public phoneNumber!: string;
  public email!: string;
  public phoneCountryId!: number;
  public status!: number;
  public gender!: string;
  public attemptLogin!: number;
  public loginCode!: number | null;
  public newEmail: string | null;
  public newPhone: string | null;
  public createAt!: string;
  public updatedAt!: string;

  public static initTable(sequelize: any) {
    return Client.init(
      {
        clientId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        surname: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        email: {
          type: DataTypes.STRING(50),
          allowNull: false,
          validate: {
            isEmail: true
          }
        },
        phoneNumber: {
          type: DataTypes.STRING(20),
          allowNull: false,
          validate: {
            is: Validate.phoneNumber
          }
        },
        phoneCountryId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },

        newEmail: {
          type: DataTypes.STRING(50),
          allowNull: true,
          validate: {
            isEmail: true
          }
        },
        newPhone: {
          type: DataTypes.STRING(20),
          allowNull: true
        },
        gender: {
          type: DataTypes.STRING(10),
          allowNull: false,
          validate: {
            isIn: [['male', 'female']]
          }
        },
        status: {
          type: DataTypes.STRING(15),
          allowNull: false,
          validate: {
            isIn: [StatusUsersArray]
          }
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['email', 'phoneNumber']
          }
        ],
        sequelize,
        timestamps: true,
        tableName: 'Clients'
      }
    );
  }

  public static associate(models: any) {
    this.belongsTo(models.Countries, { as: 'country', foreignKey: 'phoneCountryId', targetKey: 'countryId' });
    this.hasMany(models.Bookings, {
      as: 'bookings',
      sourceKey: 'clientId',
      foreignKey: 'clientId'
    });
  }
}
