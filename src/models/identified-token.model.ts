import DataTypes, { Model } from 'sequelize';

export class IdentifiedToken extends Model {
  public tokenId!: string;
  public token!: string;
  public employeeId!: string;

  public static initTable(sequelize: any) {
    return IdentifiedToken.init(
      {
        tokenId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        token: {
          type: DataTypes.STRING('max'),
          allowNull: false
        },
        employeeId: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: true,
        tableName: 'IdentifiedTokens'
      }
    );
  }
}
