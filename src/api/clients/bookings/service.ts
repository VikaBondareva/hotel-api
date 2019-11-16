import { IBooking, IBookingCreate } from '../../../interfaces';
import { Bookings } from '../../../models';
import { StatusBookings } from '../../../enums';

class BookingServiceClient {
  public async create(data: IBookingCreate): Promise<IBooking> {
    return Bookings.create(data);
  }

  public async getAll(clientId: string): Promise<IBooking[]> {
    return Bookings.findAll({ where: { clientId } });
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
}

export default new BookingServiceClient();
