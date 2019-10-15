import { Model } from 'sequelize';

export class ComplaintsEmployees extends Model {
  public complaintId!: number;
  public employeeId!: number;
  public descriptionReason!: string;
  public createDate!: Date;

  public static initTable(sequelize: any, DataTypes: any) {
    ComplaintsEmployees.init(
      {
        complaintId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        employeeId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        descriptionReason: {
          type: DataTypes.STRING('max'),
          allowNull: false
        },
        createDate: {
          type: DataTypes.DATE,
          allowNull: false,
          field: 'created_at'
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['employeeId', 'createDate']
          }
        ],
        sequelize,
        timestamps: true,
        underscored: true,
        tableName: 'ComplaintsEmployees'
      }
    );
  }
}
