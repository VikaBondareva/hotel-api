/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Model } from 'sequelize';
import { StatusUsersArray, Validate, CountAttempt } from '../enums';

export class Client extends Model {
  public clientId!: string;
  public name!: string;
  public surname!: string;
  public email!: string;
  public phoneNumber!: string;
  public status!: number;
  public attemptLogin!: number;
  public loginCode!: number | null;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;

  static initTable(sequelize: any, DataTypes: any) {
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
