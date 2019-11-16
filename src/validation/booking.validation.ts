import { object, string, number } from 'joi';

export const bookingCreate = object().keys({
  roomId: number().required(),
  arrivalDate: string().required(),
  departureDate: string().required(),
  countPersons: number().required()
});

export const bookingUpdateClient = object().keys({
  roomId: number().required(),
  arrivalDate: string().required(),
  departureDate: string().required(),
  countPersons: number().required()
});
