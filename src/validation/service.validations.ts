import { object, string, number } from 'joi';
import { StatusService } from '../enums/status.enums';

export const serviceCreate = object().keys({
  numberOfRoom: number().min(0).required(),
  floor: number().min(0).required(),
  name: string().required(),
  type: string().default('room'),
  maxPerson: number().min(0).required(),
  site: string().allow('', null),
  price: number().required().min(0),
  status: string().default(StatusService.Available)
});

export const serviceUpdate = object().keys({
  numberOfRoom: number().min(0).required(),
  floor: number().min(0).required(),
  name: string().required(),
  type: string().default('room'),
  maxPerson: number().min(0).required(),
  site: string().allow('', null),
  price: number().required().min(0),
  status: string().default(StatusService.Available)
});
