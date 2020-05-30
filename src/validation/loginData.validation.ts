import joi from 'joi';

const devSchema = joi
  .object()
  .keys({
    email: joi
      .string()
      .email()
      .required(),
    password: joi
      .string()
      .required()
      .min(6)
      .max(30)
  })
  .unknown()
  .required();

export default devSchema;
