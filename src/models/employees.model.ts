import DataTypes, { Model, Sequelize } from 'sequelize';
import bcrypt from 'bcrypt';
import { Validate, StatusUsersArray } from '../enums';

export class Employee extends Model {
  public employeeId!: number;
  public name!: string;
  public surname!: string;
  public phoneNumber!: string;
  public email!: string;
  public status!: string;
  public password!: string;
  public positionId!: number;
  public isAdmin!: boolean;
  public role!: string;
  public permissions!: number;
  public createdAt!: string;
  public updatedAt!: string;

  public static initTable(sequelize: Sequelize) {
    Employee.init(
      {
        employeeId: {
          type: DataTypes.INTEGER,
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
          type: DataTypes.STRING(30),
          allowNull: false,
          validate: {
            isEmail: true
          }
        },
        password: {
          type: DataTypes.STRING('max'),
          allowNull: false
        },
        phoneNumber: {
          type: DataTypes.STRING(20),
          allowNull: false,
          validate: {
            is: Validate.phoneNumber
          }
        },
        positionId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        isAdmin: {
          type: DataTypes.BOOLEAN
        },
        role: {
          type: DataTypes.STRING(30)
        },
        permissions: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 100,
            max: 1750
          },
          field: 'permisions'
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
        timestamps: false,
        tableName: 'Employees'
      }
    );

    Employee.beforeSave((user) => {
      return bcrypt.hash(user.password, 10).then((hash) => {
        user.password = hash;
      });
    });

    Employee.beforeUpdate((user) => {
      return bcrypt.hash(user.password, 10).then((hash) => {
        user.password = hash;
      });
    });

    return Employee;
  }

  public static associate(models: any) {
    this.belongsTo(models.Positions, {
      as: 'position',
      foreignKey: 'positionId',
      targetKey: 'positionId'
    });
    this.hasMany(models.EmployeeToPayment, {
      as: 'tasks',
      sourceKey: 'employeeId',
      foreignKey: 'employeeId'
    });
    this.belongsToMany(models.Payment, {
      as: 'payments',
      through: models.EmployeeToPayment,
      sourceKey: 'employeeId',
      foreignKey: 'employeeId'
    });
  }
}
