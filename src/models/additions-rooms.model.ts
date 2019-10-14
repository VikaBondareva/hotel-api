import { Model } from 'sequelize';

export class AdditionRooms extends Model {
  public additionId!: number;
  public roomId!: number;
  public status!: string;

  public static initTable(sequelize: any, DataTypes: any) {
    AdditionRooms.init(
      {
        status: {
          type: DataTypes.STRING(50),
          allowNull: false
        }
        // roomId: {
        //   type: DataTypes.INTEGER,
        //   allowNull: false,
        //   primaryKey: true
        // },
        // additionId: {
        //   type: DataTypes.INTEGER,
        //   allowNull: false,
        //   primaryKey: true
        // }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['roomId', 'additionId']
          }
        ],
        sequelize,
        timestamps: false,
        tableName: 'AdditionRooms'
      }
    );
  }
}

export default AdditionRooms;
