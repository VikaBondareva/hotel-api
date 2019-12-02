import DataTypes, { Model } from 'sequelize';

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

  public static initTable(sequelize: any) {
    return Services.init(
      {
        serviceId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
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
          allowNull: true,
          defaultValue: null
        },
        price: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            min: 0
          },
          field: 'ptice'
        }
      },
      {
        sequelize,
        timestamps: false,
        tableName: 'Services'
      }
    );
  }

  public static associate(models: any) {
    this.hasMany(models.Schedule, {
      as: 'schedules',
      sourceKey: 'serviceId',
      foreignKey: 'serviceId'
    });

    this.hasMany(models.Payment, {
      as: 'payments',
      sourceKey: 'serviceId',
      foreignKey: 'serviceId'
    });
  }
}
