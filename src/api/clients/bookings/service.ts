import { IBooking, IBookingCreate } from '../../../interfaces';
import { Bookings, Payment, Services } from '../../../models';
import { StatusBookings } from '../../../enums';
import { sequelize } from '../../../config/databaseConnect';
import Sequelize from 'sequelize';

class BookingServiceClient {
  public async create(data: IBookingCreate): Promise<IBooking> {
    return Bookings.create(data);
  }

  public async getAll(clientId: string): Promise<IBooking[]> {
    return Bookings.findAll({
      where: { clientId },
      include: [{ model: Payment, as: 'payments', include: [{ model: Services, as: 'service' }] }]
    });
  }

  public async getById(bookingId: string, clientId: string): Promise<IBooking> {
    return Bookings.findOne({ where: { bookingId, clientId }, raw: true });
  }

  public async update(bookingId: string, clientId: string, data: IBookingCreate): Promise<IBooking | boolean> {
    const model = await Bookings.findOne({ where: { bookingId, clientId } });
    if (model && model.status === StatusBookings.Pending) {
      return model.update(data);
    }
    return false;
  }

  public async remove(bookingId: string): Promise<boolean> {
    const booking = await Bookings.findOne({ where: { bookingId } });
    if (booking.status === StatusBookings.Pending) {
      const result = await Bookings.destroy({ where: { bookingId } })
        .then(() => true)
        .catch(() => false);
      return result;
    }
    return false;
  }

  public async getAllPrice(clientId: string): Promise<IBooking[]> {
    return sequelize.query(`Exec SelectBookingsByClientId :clientId`, {
      replacements: { clientId },
      type: Sequelize.QueryTypes.SELECT
    });
  }
}

export default new BookingServiceClient();
