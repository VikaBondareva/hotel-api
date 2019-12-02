import DataTypes, { Model } from 'sequelize';

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

  public static initTable(sequelize: any) {
    return Rooms.init(
      {
        roomId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false
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
          type: DataTypes.STRING(10),
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'Rooms'
      }
    );
  }

  public static associate(models: any) {
    this.belongsToMany(models.Additions, {
      as: 'additions',
      through: models.AdditionsRooms,
      sourceKey: 'roomId',
      foreignKey: 'roomId'
    });

    this.belongsTo(models.AdditionsRooms, {
      as: 'additionsRooms',
      foreignKey: 'roomId',
      targetKey: 'roomId'
    });
  }
}
