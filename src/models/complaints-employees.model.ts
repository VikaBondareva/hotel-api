import DataTypes, { Model } from 'sequelize';

export class ComplaintsEmployees extends Model {
  public complaintId!: number;
  public employeeId!: number;
  public clientId!: number;
  public descriptionReason!: string;
  public createDate!: Date;

  public static initTable(sequelize: any) {
    return ComplaintsEmployees.init(
      {
        complaintId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        clientId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        employeeId: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        descriptionReason: {
          type: DataTypes.STRING('max'),
          allowNull: false
        },
        createDate: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: DataTypes.NOW
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'ComplaintsEmployees'
      }
    );
  }

  public static associate(models: any) {
    this.belongsTo(models.Client, {
      as: 'client',
      foreignKey: 'clientId',
      targetKey: 'clientId'
    });
    this.belongsTo(models.Employee, {
      as: 'employee',
      foreignKey: 'employeeId',
      targetKey: 'employeeId'
    });
  }
}
