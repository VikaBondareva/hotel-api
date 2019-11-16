import { Model } from 'sequelize';
import Sequelize from 'sequelize';

export class EmployeeToPayment extends Model {
  public id!: number;
  public paymentId!: number;
  public employeeId!: number;
  public createdDate!: Date;
  public status!: string;

  public static initTable(sequelize: any) {
    return EmployeeToPayment.init(
      {
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
        indexes: [
          {
            unique: true,
            fields: ['paymentId', 'employeeId']
          }
        ],
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
