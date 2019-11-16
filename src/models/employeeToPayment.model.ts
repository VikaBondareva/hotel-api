import { Model } from 'sequelize';
import Sequelize from 'sequelize';

export class EmployeeToPayment extends Model {
  public paymentId: string;
  public employeeId: string;
  public createdDate!: string;
  public status!: string;

  public static initTable(sequelize: any) {
    return EmployeeToPayment.init(
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        paymentId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        employeeId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        status: {
          type: Sequelize.STRING(10),
          allowNull: false
        },
        createdDate: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'EmployeesPayments'
      }
    );
  }

  public static associate(models: any) {
    this.belongsTo(models.Payment, {
      as: 'payment',
      foreignKey: 'paymentId',
      targetKey: 'paymentId'
    });
    this.belongsTo(models.Employee, {
      as: 'employee',
      foreignKey: 'employeeId',
      targetKey: 'employeeId'
    });
  }
}
