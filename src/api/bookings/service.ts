import { IBooking, IBookingCreate } from '../../interfaces';
import { Bookings, Client, Payment } from '../../models';

const selects = {
  include: [{ model: Client, as: 'client' }]
};

const selectsPayments = {
  include: [
    { model: Client, as: 'client' },
    { model: Payment, as: 'payments' }
  ]
};

class BookingService {
  public async getAll(isPayments: boolean): Promise<IBooking[]> {
    let query;
    if (isPayments) query = selectsPayments;
    else query = selects;
    return Bookings.findAll(query);
  }

  public async getById(id: string): Promise<IBooking> {
    return Bookings.findOne({ where: { bookingId: id }, raw: true, ...selects });
  }

  public async updateStatus(bookingId: string, status: string): Promise<IBooking | boolean> {
    const model = await Bookings.findOne({ where: { bookingId } });
    if (model) {
      return model.update({ status });
    }
    return false;
  }
  public async remove(bookingId: string): Promise<boolean> {
    const result = await Bookings.destroy({ where: { bookingId } })
      .then(() => true)
      .catch(() => false);

    return result;
  }
}

export default new BookingService();
