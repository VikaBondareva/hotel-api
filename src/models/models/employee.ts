import * as Sequelize from 'sequelize';
import { sequelize } from '../../config';
import { StatusUsersArray, Validate } from '../../enums';

export interface IEmployeeAddModal {
  name: string;
  surname: string;
  email: string;
  password: string;
  phoneNumber: string;
  status: string;
}

export interface IEmployeeModel extends Sequelize.Model<IEmployeeModel, IEmployeeAddModal> {
  employeeId: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  phoneNumber: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface IEmployeeModel {
  employeeId: number;
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  status: string;
}

export const Employee = sequelize.define<IEmployeeModel, IEmployeeAddModal>(
  'Employees',
  {
    employeeId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    surname: {
      type: Sequelize.STRING(20),
      allowNull: false
    },
    email: {
      type: Sequelize.STRING(50),
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING(500),
      allowNull: false
    },
    phoneNumber: {
      type: Sequelize.STRING(20),
      allowNull: false,
      validate: {
        is: Validate.phoneNumber
      }
    },
    status: {
      type: Sequelize.STRING(20),
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
    timestamps: true
  }
);
