import DataTypes, { Model, Sequelize } from 'sequelize';

export class Token extends Model {
  public tokenId!: string;
  public userId!: number;
  public role!: string;
  public isValid!: boolean;
  public createdAt!: Date;

  public static initTable(sequelize: Sequelize) {
    return Token.init(
      {
        tokenId: {
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        role: {
          type: DataTypes.STRING(520),
          allowNull: false
        },
        isValid: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: new Date()
        }
      },
      {
        sequelize,
        timestamps: true,
        tableName: 'RefreshTokens'
      }
    );
  }
}
