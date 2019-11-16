import { object, string, number } from 'joi';

export const additionCreate = object().keys({
  name: string()
    .max(20)
    .required(),
  price: number()
    .min(0)
    .required()
});
