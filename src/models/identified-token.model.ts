/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Model } from 'sequelize';

class TokenIdentified extends Model {
  public tokenId!: string;
  public token!: string;
  public userId!: string;
  public role!: string;
  public isValid!: boolean;

  static initTable(sequelize: any, DataTypes: any) {
    return this.init(
      {
        tokenId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        token: {
          type: DataTypes.STRING(99999),
          allowNull: false
        },
        userId: {
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
