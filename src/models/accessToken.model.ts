import DataTypes, { Model, Sequelize } from 'sequelize';

export class AccessToken extends Model {
  public token!: string;
  public id!: number;

  public static initTable(sequelize: Sequelize) {
    return AccessToken.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          autoIncrementIdentity: true,
          allowNull: false
        },
        token: {
          type: DataTypes.STRING,
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: true,
        tableName: 'Tokens'
      }
    );
  }
}
