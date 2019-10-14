import { Model, Sequelize } from 'sequelize';

export class Bookings extends Model {
  public bookingId!: number;
  public clientId!: number;
  public roomId!: number;
  public arrivalDate!: string;
  public departureDate!: string;
  public countPersons!: number;
  public bookingTime!: string;
  public status!: string;

  public static initTable(sequelize: Sequelize, DataTypes: any) {
    Bookings.init(
      {
        bookingId: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
        },
        roomId: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        clientId: {
          type: DataTypes.INTEGER,
          allowNull: true
        },
        arrivalDate: {
          type: DataTypes.DATE,
          allowNull: false
        },
        departureDate: {
          type: DataTypes.DATE,
          allowNull: false
        },
        countPersons: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        status: {
          type: DataTypes.STRING(10),
          allowNull: false
        },
        bookingTime: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          allowNull: false
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['clientId', 'roomId', 'arrivalDate']
          }
        ],
        sequelize,
        timestamps: false,
        tableName: 'Bookings'
      }
    );
  }
}

export default Bookings;
