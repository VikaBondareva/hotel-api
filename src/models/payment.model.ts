import { Model } from 'sequelize';
import Sequelize from 'sequelize';

export class Payment extends Model {
  public paymentId!: number;
  public bookingId!: number;
  public serviceId!: number;
  public datePay!: Date;
  public startTime!: string;
  public endTime!: string;
  public discount!: number;
  public price!: number;
  public bookingDate!: string;
  public status!: string;

  public static initTable(sequelize: any) {
    return Payment.init(
      {
        paymentId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        bookingId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        serviceId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        datePay: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        startTime: {
          type: Sequelize.TIME,
          allowNull: false
        },
        endTime: {
          type: Sequelize.TIME,
          allowNull: false
        },
        discount: {
          type: Sequelize.FLOAT,
          allowNull: true
        },
        price: {
          type: Sequelize.FLOAT,
          allowNull: false,
          validate: {
            min: 0
          }
        },
        status: {
          type: Sequelize.STRING(10),
          allowNull: false
        },
        bookingDate: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'Payments'
      }
    );
  }

  public static associate(models: any) {
    this.belongsTo(models.Bookings, {
      as: 'booking',
      foreignKey: 'bookingId',
      targetKey: 'bookingId'
    });
    this.belongsTo(models.Services, {
      as: 'service',
      foreignKey: 'serviceId',
      targetKey: 'serviceId'
    });
  }
}
