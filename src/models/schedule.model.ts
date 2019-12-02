import { Model } from 'sequelize';
import Sequelize from 'sequelize';

export class Schedule extends Model {
  public scheduleId!: number;
  public serviceId!: number;
  public dayOfWeek!: number;
  public startTime!: string;
  public endTime!: string;
  public startLunch: string;
  public endLunch: string;

  public static initTable(sequelize: any) {
    return Schedule.init(
      {
        scheduleId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          field: 'sheduleId'
        },
        serviceId: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        dayOfWeek: {
          type: Sequelize.INTEGER,
          allowNull: false,
          validate: {
            min: 1,
            max: 7
          }
        },
        startTime: {
          type: Sequelize.STRING(5),
          allowNull: false
        },
        endTime: {
          type: Sequelize.STRING(5),
          allowNull: false
        },
        startLunch: {
          type: Sequelize.STRING(5),
          allowNull: true
        },
        endLunch: {
          type: Sequelize.STRING(5),
          allowNull: true
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'Shedule'
      }
    );
  }

  public static associate(models: any) {
    this.belongsTo(models.Services, {
      as: 'service',
      foreignKey: 'serviceId',
      targetKey: 'serviceId'
    });
  }
}
