import { Model } from 'sequelize';
import Sequelize from 'sequelize';

export class Schedule extends Model {
  public scheduleId!: number;
  public serviceId!: number;
  public dayOfWeek!: number;
  public startTime!: Date;
  public endTime!: Date;
  public startLunch: Date;
  public endLunch: Date;

  public static initTable(sequelize: any) {
    return Schedule.init(
      {
        scheduleId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
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
            min: 0,
            max: 6
          }
        },
        startTime: {
          type: Sequelize.TIME,
          allowNull: false
        },
        endTime: {
          type: Sequelize.TIME,
          allowNull: false
        },
        startLunch: {
          type: Sequelize.TIME,
          allowNull: false
        },
        endLunch: {
          type: Sequelize.TIME,
          allowNull: false
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
