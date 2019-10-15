import { Model } from 'sequelize';

export class Rooms extends Model {
  public roomId!: number;
  public floor!: number;
  public countRooms!: number;
  public countDoubleBeds!: number;
  public countSingleBeds!: number;
  public totalBeds!: number;
  public toilets!: number;
  public price!: number;
  public status!: string;

  public static initTable(sequelize: any, DataTypes: any) {
    Rooms.init(
      {
        roomId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          unique: true
        },
        floor: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 0
          }
        },
        countRooms: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 1
          }
        },
        countDoubleBeds: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 0
          }
        },
        countSingleBeds: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 0
          }
        },
        totalBeds: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 0
          }
        },
        toilets: {
          type: DataTypes.INTEGER,
          allowNull: false,
          validate: {
            min: 0
          }
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            min: 0
          }
        },
        status: {
          type: DataTypes.STRING(20),
          allowNull: false
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['roomId', 'floor']
          }
        ],
        sequelize,
        timestamps: false,
        tableName: 'Rooms'
      }
    );
  }
}

export default Rooms;
