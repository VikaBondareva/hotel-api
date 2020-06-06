import DataTypes, { Model } from 'sequelize';

export class Vacations extends Model {
  public vacationId!: number;
  public employeeId!: number;
  public startDate!: string;
  public endDate!: string;
  public status!: string;
  public isUnpaid!: boolean;
  public countDays!: number;
  public approvedBy!: number;

  public static initTable(sequelize: any) {
    return Vacations.init(
      {
        vacationId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        employeeId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        status: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        startDate: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        countDays: {
          type: DataTypes.FLOAT,
          allowNull: false
        },
        endDate: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        isUnpaid: {
          type: DataTypes.BOOLEAN,
          allowNull: false
        },
        approvedBy: {
          type: DataTypes.INTEGER,
          allowNull: true
        }
      },
      {
        sequelize,
        timestamps: true,
        tableName: 'Vacations'
      }
    );
  }

  public static associate(models: any) {
    this.belongsTo(models.Employee, {
      as: 'employee',
      foreignKey: 'employeeId',
      targetKey: 'employeeId'
    });
  }
}
