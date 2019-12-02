import { object, string, number } from 'joi';

export const additionCreate = object().keys({
  name: string()
    .max(20)
    .required(),
  price: number()
    .min(0)
    .required()
});

export const scheduleCreate = object().keys({
  dayOfWeek: number()
    .min(1)
    .max(7)
    .required(),
  startTime: string()
    .length(5)
    .required(),
  endTime: string()
    .length(5)
    .required(),
  startLunch: string().length(5),
  endLunch: string().length(5)
});
