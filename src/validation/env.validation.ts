import { object, number, string } from 'joi';

export const schemaDev = object({
  NODE_ENV: string().valid('development').required(),
  APP_PORT: number().required(),
  JWT_ENCRYPTION: string().required(),
  JWT_ACCESS_EXPIRATION: string().required(),
  JWT_REFRESH_EXPIRATION: number().required(),
  JWT_IDENTIFIED_EXPIRATION: number().required(),
  EMAIL_SERVER_HOST: string().required(),
  DATABASE_HOST: string().required(),
  DATABASE_NAME: string().required(),
  DATABASE_LOGIN: string().required(),
  DATABASE_PASSWORD: string().required(),
  DATABASE_PORT: number().required()
})
  .unknown()
  .required();

export const schemaTest = object({
  NODE_ENV: string().valid('test', 'production').required(),
  JWT_ENCRYPTION: string().required(),
  JWT_ACCESS_EXPIRATION: string().required(),
  JWT_REFRESH_EXPIRATION: number().required(),
  JWT_IDENTIFIED_EXPIRATION: number().required(),
  DATABASE_HOST: string().required(),
  DATABASE_NAME: string().required(),
  DATABASE_LOGIN: string().required(),
  DATABASE_PASSWORD: string().required(),
  DATABASE_PORT: string().required()
})
  .unknown()
  .required();
