import { object, string, number } from 'joi';

export const roomCreate = object().keys({
  roomId: number().positive().required(),
  floor: number().min(0).required(),
  countRooms: number().positive().required(),
  countDoubleBeds: number().min(0).required(),
  countSingleBeds: number().min(0).required(),
  toilets: number().min(0).required(),
  status: string().default('work'),
  price: number().positive().required()
});

export const roomEdit = object().keys({
  floor: number().min(0).required(),
  countRooms: number().positive().required(),
  countDoubleBeds: number().min(0).required(),
  countSingleBeds: number().min(0).required(),
  toilets: number().min(0).required(),
  price: number().positive().required()
});

export const roomService = object().keys({
  name: string().required(),
  price: number().required().min(0)
});
