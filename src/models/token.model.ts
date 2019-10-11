/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { Model, STRING, INTEGER, DATE, BOOLEAN, Sequelize } from 'sequelize';

class Token extends Model {
  public tokenId!: string;
  public userId!: string;
  public role!: string;
  public isValid!: boolean;
  public createdAt!: Date;

  static initTable(sequelize: Sequelize) {
    return this.init(
      {
        tokenId: {
          type: STRING('max'),
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        userId: {
          type: INTEGER,
          allowNull: false
        },
        role: {
          type: STRING(520),
          allowNull: false
        },
        isValid: {
          type: BOOLEAN,
          allowNull: false,
          defaultValue: false
        },
        createdAt: {
          type: DATE,
          allowNull: false,
          defaultValue: new Date()
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

export default Token;
