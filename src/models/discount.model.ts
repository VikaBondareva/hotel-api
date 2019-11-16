import DataTypes, { Model } from 'sequelize';

export class Discount extends Model {
  public discountId!: number;
  public type!: string;
  public count!: number;

  public static initTable(sequelize: any) {
    return Discount.init(
      {
        discountId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        type: {
          type: DataTypes.STRING(10),
          allowNull: false
        },
        count: {
          type: DataTypes.FLOAT,
          allowNull: false
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'Discounts'
      }
    );
  }
}
