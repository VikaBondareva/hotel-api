import DataTypes, { Model } from 'sequelize';

export class Tasks extends Model {
  public taskId!: number;
  public employeeId!: number;
  public paymentId!: number;
  public startDate!: Date;
  public endDate!: Date;
  public status!: string;
  public location!: string;
  public name!: string;
  public title!: string;
  public description!: string;
  public closedDate!: Date;

  public static initTable(sequelize: any) {
    return Tasks.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        location: {
          type: DataTypes.STRING(80),
          allowNull: false
        },
        paymentId: {
          type: DataTypes.INTEGER,
          allowNull: false
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
          type: DataTypes.DATE,
          allowNull: false
        },
        endDate: {
          type: DataTypes.DATE,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING(80),
          allowNull: true
        },
        title: {
          type: DataTypes.STRING(80),
          allowNull: true
        },
        description: {
          type: DataTypes.STRING(255),
          allowNull: true
        },
        closedDate: {
          type: DataTypes.DATE,
          allowNull: true
        }
      },
      {
        sequelize,
        timestamps: true,
        tableName: 'Tasks'
      }
    );
  }

  public static associate(models: any) {
    this.belongsTo(models.Payment, {
      as: 'payment',
      foreignKey: 'paymentId',
      targetKey: 'paymentId'
    });
  }
}
