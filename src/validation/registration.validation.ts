import { object, string, number } from 'joi';
import { Validate } from '../enums';

export const validateRegisterClient = object().keys({
  phoneNumber: string().length(13).required(),
  name: string().required().min(2).max(15),
  surname: string().required().min(2).max(15),
  email: string().email().required(),
  phoneCountryId: number().required()
});

export const validateRegisterEmployee = object().keys({
  phoneNumber: string().required(),
  name: string().required().min(2).max(15),
  surname: string().required().min(2).max(15),
  email: string().email().required(),
  permissions: number().min(100).default(157),
  role: string().required().default('cleaning')
});
