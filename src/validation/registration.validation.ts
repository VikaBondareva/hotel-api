import { object, string, number } from 'joi';
import { Validate } from '../enums';

export const validateRegisterClient = object().keys({
  phoneNumber: string()
    .length(13)
    .required()
    .regex(Validate.phoneNumber),
  name: string()
    .required()
    .min(2)
    .max(15),
  surname: string()
    .required()
    .min(2)
    .max(15),
  email: string()
    .email()
    .required(),
  phoneCountryId: number().required()
});

export const validateRegisterEmployee = object().keys({
  phoneNumber: string()
    .required()
    .regex(Validate.phoneNumber),
  name: string()
    .required()
    .min(2)
    .max(15),
  surname: string()
    .required()
    .min(2)
    .max(15),
  email: string()
    .email()
    .required(),
  positionId: number().required(),
  permissions: number()
    .required()
    .min(100)
});
