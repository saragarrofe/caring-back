
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { AppDataSource } from './orm/config/data-source';
import app from './app';

dotenv.config();
const PORT = Number(process.env.PORT) || 1234

