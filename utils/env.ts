import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export const env = {
  BASE_URL: process.env.BASE_URL ?? 'https://www.greencity.cx.ua/#/greenCity',
  HEADLESS: process.env.HEADLESS !== 'false',
  RETRIES: parseInt(process.env.RETRIES ?? '0', 10),
  TIMEOUT: parseInt(process.env.TIMEOUT ?? '30000', 10),
};