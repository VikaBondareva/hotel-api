import { Model } from 'sequelize';

export interface IPayment extends Model {
  paymentId: number;
  bookingId: number;
  serviceId: number;
  datePay: Date;
  startTime: string;
  endTime: string;
  discount: number;
  price: number;
  status: string;
  bookingDate: string;
}

export interface IPaymentCreate {
  serviceId: number;
  datePay: string;
  startTime: number;
  endTime: number;
}
