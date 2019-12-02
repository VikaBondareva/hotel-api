import { IBooking, IBookingCreate } from '../../interfaces';
import { Bookings } from '../../models';

class ClientService {
  public async create(data: IBookingCreate): Promise<IBooking> {
    return Bookings.create(data);
  }

  public async getAll(): Promise<IBooking[]> {
    return Bookings.findAll();
  }

  public async getById(id: string): Promise<IBooking> {
    return Bookings.findOne({ where: { additionId: id }, raw: true });
  }

  public async updateStatus(additionId: string, data: IBookingCreate): Promise<IBooking | boolean> {
    const addition = await Bookings.findOne({ where: { additionId } });
    if (addition) {
      return addition.update(data);
    }
    return false;
  }
  public async remove(additionId: string): Promise<boolean> {
    const result = await Bookings.destroy({ where: { additionId } })
      .then(() => true)
      .catch(() => false);

    return result;
  }
}

export default new ClientService();
