import DataTypes, { Model } from 'sequelize';

export class Additions extends Model {
  public additionsId!: number;
  public name!: string;
  public price!: number;
  public static initTable(sequelize: any) {
    return Additions.init(
      {
        additionId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: true
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'Additions'
      }
    );
  }

  public static associate(models: any) {
    this.belongsToMany(models.Rooms, {
      as: 'rooms',
      through: models.AdditionsRooms,
      sourceKey: 'additionId',
      foreignKey: 'additionId'
    });
  }
}
