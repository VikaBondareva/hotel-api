import { object, string, number } from 'joi';

export const serviceCreate = object().keys({
  numberOfRoom: number()
    .min(0)
    .required(),
  floor: number()
    .positive()
    .required(),
  name: string().required(),
  type: string(),
  maxPerson: number()
    .min(0)
    .required(),
  site: string(),
  price: number()
    .required()
    .min(0)
});

export const serviceUpdate = object().keys({
  numberOfRoom: number()
    .min(0)
    .required(),
  floor: number()
    .positive()
    .required(),
  name: string().required(),
  type: string(),
  maxPerson: number()
    .min(0)
    .required(),
  site: string(),
  price: number()
    .required()
    .min(0),
  status: string().required()
});
