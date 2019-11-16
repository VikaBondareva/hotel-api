import DataTypes, { Model } from 'sequelize';

export class AdditionsRooms extends Model {
  public additionId!: number;
  public roomId!: number;
  public status!: string;

  public static initTable(sequelize: any) {
    return AdditionsRooms.init(
      {
        status: {
          type: DataTypes.STRING(10),
          allowNull: false
        },
        roomId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        additionId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        }
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
        tableName: 'AdditionsRooms'
      }
    );
  }

  public static associate(models: any) {
    this.belongsTo(models.Additions, {
      as: 'addition',
      foreignKey: 'additionId',
      targetKey: 'additionId'
    });

    this.belongsTo(models.Rooms, {
      as: 'room',
      foreignKey: 'roomId',
      targetKey: 'roomId'
    });
  }
}
