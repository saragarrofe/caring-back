
import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { AppDataSource } from './orm/config/data-source';
import app from './app';

dotenv.config();
const PORT = Number(process.env.PORT) || 1234;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    AppDataSource.initialize().catch((error) => console.error('TypeORM connection error:', error));
});

