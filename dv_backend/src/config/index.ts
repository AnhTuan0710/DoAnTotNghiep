import * as config from 'config';

export const APP_URL = {
  ADMIN_URL: config.get<string>('app.url.admin'),
}

export const MAIL_CONFIG = {
  HOST: process.env.EMAIL_HOST,
  PORT: process.env.EMAIL_PORT,
  USER: process.env.EMAIL_USER,
  PASS: process.env.EMAIL_PASS,
  FROM: process.env.EMAIL_FROM,
  SECURE: process.env.EMAIL_SECURE,
};

export const DATABASE = {
  TYPE: config.get<string>('database.type'),
  HOST: config.get<string>('database.host'),
  PORT: config.get<number>('database.port'),
  USER_NAME: config.get<string>('database.username'),
  PASSWORD: config.get<string>('database.password'),
  DATABASE: config.get<string>('database.database'),
}