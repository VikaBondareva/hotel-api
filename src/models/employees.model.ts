/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Model } from 'sequelize';
import bcrypt from 'bcrypt';
import { Validate, StatusUsersArray } from '../enums';

class Employee extends Model {
  public employeeId!: string;
  public name!: string;
  public surname!: string;
  public password!: string;
  public email!: string;
  public phoneNumber!: string;
  public status!: number;
  public identifiedToken!: number | null;
  public created_at!: Date;
  public updated_at!: Date;

  public getFullName = () => {
    return `${this.name} ${this.surname}`;
  };

  public comparePassword = (candidatePassword: string) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(candidatePassword, this.password, (err, success) => {
        if (err) return reject(err);
        return resolve(success);
      });
    });
  };

  static countDocuments = async () => {
    return await Employee.count();
  };

  static remove = async (options: any, callback: () => {}) => {
    return await Employee.destroy(options).then(() => {
      callback();
    });
  };

  static initTable(sequelize: any, DataTypes: any) {
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
        },
        identifiedToken: {
          type: DataTypes.STRING(99999),
          allowNull: true,
          defaultValue: null
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
