import DataTypes, { Model } from 'sequelize';

export class Countries extends Model {
  public countryId!: number;
  public name!: string;
  public phoneCode!: number;

  public static initTable(sequelize: any) {
    return Countries.init(
      {
        countryId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING(30),
          allowNull: false
        },
        phoneCode: {
          type: DataTypes.INTEGER,
          allowNull: false
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['countryId', 'phoneCode']
          }
        ],
        sequelize,
        timestamps: false,
        tableName: 'Countries'
      }
    );
  }
}
