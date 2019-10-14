import { Model } from 'sequelize';

class TokenIdentified extends Model {
  public tokenId!: string;
  public token!: string;
  public employeeId!: string;

  public static initTable(sequelize: any, DataTypes: any) {
    return TokenIdentified.init(
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

export default TokenIdentified;
