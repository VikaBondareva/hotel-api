import { Model } from 'sequelize';

export class Services extends Model {
  public serviceId!: number;
  public numberOfRoom!: number;
  public floor!: number;
  public name!: string;
  public type!: string;
  public status!: string;
  public maxPerson!: number;
  public site!: string;
  public price!: number;

  public static initTable(sequelize: any, DataTypes: any) {
    Services.init(
      {
        serviceId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        numberOfRoom: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        floor: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false
        },
        type: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        status: {
          type: DataTypes.STRING(20),
          allowNull: false
        },
        maxPerson: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        site: {
          type: DataTypes.STRING('max'),
          allowNull: true
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            min: 0
          }
        }
      },
      {
        sequelize,
        timestamps: true,
        tableName: 'Services'
      }
    );
  }
}
