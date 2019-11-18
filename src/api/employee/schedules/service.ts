import { IPayment, IPaymentCreate } from '../../../interfaces';
import { Payment, Bookings, Services } from '../../../models';
import { StatusBookings } from '../../../enums/status.enums';

class EmployeeScheduleService {
  public async getAll(bookingId: string): Promise<IPayment[]> {
    return Payment.findAll({ where: { bookingId } });
  }

  public async getById(bookingId: string, paymentId: boolean): Promise<IPayment> {
    return Payment.findOne({ where: { bookingId, paymentId } });
  }

  public async create(bookingId: string, model: IPaymentCreate): Promise<IPayment | boolean> {
    const booking = await Bookings.findOne({ where: { bookingId } });
    const service = await Services.findOne({ where: { serviceId: model.serviceId } });
    if (booking && service) {
      const paymentsService = await Services.findAll({
        where: { serviceId: service.serviceId, datePlay: model.datePay }
      });

      const data = {
        ...model,
        price: service.price
      };
      if (paymentsService.length >= service.maxPerson)
        return Payment.create({ ...data, status: StatusBookings.Canceled });
      else return Payment.create({ ...data, status: StatusBookings.Affected });
    }
    return false;
  }

  public async updateStatus(bookingId: string, paymentId: boolean, status: string): Promise<IPayment | boolean> {
    const model = await Payment.findOne({ where: { bookingId, paymentId } });
    if (model) {
      return model.update({ status });
    }
    return false;
  }
  public async remove(bookingId: string, paymentId: boolean): Promise<boolean> {
    const result = await Payment.destroy({ where: { bookingId, paymentId } })
      .then(() => true)
      .catch(() => false);

    return result;
  }
}

export default new EmployeeScheduleService();
