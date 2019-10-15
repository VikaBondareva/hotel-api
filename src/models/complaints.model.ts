import { Model } from 'sequelize';

export class Complaints extends Model {
  public complaintId!: number;
  public clientId!: number;
  public countComplaints!: number;

  public static initTable(sequelize: any, DataTypes: any) {
    Complaints.init(
      {
        complaintId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        clientId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        countComplaints: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 0
          },
          defaultValue: 0
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['complaintId', 'clientId']
          }
        ],
        sequelize,
        timestamps: false,
        tableName: 'Complaints'
      }
    );
  }
}
