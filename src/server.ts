
// inicia el servidor y establecer la conexión a la base de datos

import 'reflect-metadata'; // es necesario para TypeORM
import * as dotenv from 'dotenv'; // carga las variables de entorno
import { AppDataSource } from './orm/config/data-source';
import app from './app';

dotenv.config({ override: true });

// dotenv.config();
const PORT = Number(process.env.PORT) || 1234;

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//     AppDataSource.initialize().catch((error) => console.error('TypeORM connection error:', error));
// });

AppDataSource.initialize()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
