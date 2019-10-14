import { Model } from 'sequelize';
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
  public readonly createAt!: Date;
  public readonly updatedAt!: Date;

  public static initTable(sequelize: any, DataTypes: any) {
    Client.init(
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
          type: DataTypes.STRING(50),
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
          type: DataTypes.STRING(20),
          allowNull: false,
          validate: {
            isIn: [StatusUsersArray]
          }
        },
        attemptLogin: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 0,
          validate: {
            max: CountAttempt.loginClient,
            min: 0
          }
        },
        loginCode: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: null,
          validate: {
            max: 999999,
            min: 100000
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
}

export default Client;
