import { Model } from 'sequelize';

export interface IBooking extends Model {
  bookingId: number;
  roomId: number;
  clientId: number;
  arrivalDate: string;
  departureDate: string;
  countPersons: number;
  status: string;
  bookingTime: string;
}

export interface IBookingCreate {
  roomId: number;
  arrivalDate: string;
  departureDate: string;
  countPersons: number;
}
