import { Model } from 'sequelize';

export class Additions extends Model {
  public additionsId!: number;
  public name!: string;
  public price!: number;

  public static initTable(sequelize: any, DataTypes: any) {
    Additions.init(
      {
        additionsId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['name', 'price']
          }
        ],
        sequelize,
        timestamps: false,
        tableName: 'Additions'
      }
    );
  }
}

export default Additions;
