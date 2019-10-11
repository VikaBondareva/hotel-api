/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Model, Sequelize } from 'sequelize';
import bcrypt from 'bcrypt';
import { Validate, StatusUsersArray } from '../enums';

class Employee extends Model {
  public employeeId!: string;
  public name!: string;
  public surname!: string;
  public password!: string;
  public email!: string;
  public phoneNumber!: string;
  public status!: string;
  public created_at!: string;
  public updated_at!: string;

  public static initTable(sequelize: Sequelize, DataTypes: any) {
    Employee.init(
      {
        employeeId: {
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
        password: {
          type: DataTypes.STRING(500),
          allowNull: false
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
        tableName: 'Employees'
      }
    );

    Employee.beforeSave(user => {
      return bcrypt.hash(user.password, 10).then(hash => {
        user.password = hash;
      });
    });

    Employee.beforeUpdate(user => {
      return bcrypt.hash(user.password, 10).then(hash => {
        user.password = hash;
      });
    });
  }
}

export default Employee;
