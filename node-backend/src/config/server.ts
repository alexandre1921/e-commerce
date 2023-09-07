import path from 'path';
import { config } from 'dotenv';

config();

export const applicationOrigin = String(process.env.APLICATION_ORIGIN);

export const applicationPort = String(process.env.PORT);

export const schemaFilePath = path.resolve(__dirname, '../schema.gql');
