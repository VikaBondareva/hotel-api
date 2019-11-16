import DataTypes, { Model, Sequelize } from 'sequelize';

export class Positions extends Model {
  public positionId!: number;
  public positionName!: string;

  public static initTable(sequelize: Sequelize) {
    return Positions.init(
      {
        positionId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        positionName: {
          type: DataTypes.STRING(50),
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'Positions'
      }
    );
  }
}
