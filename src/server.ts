
// inicia el servidor y establecer la conexión a la base de datos

import 'reflect-metadata'; // es necesario para TypeORM
import 'dotenv/config'
import { AppDataSource } from './orm/config/data-source';
import app from './app';


// dotenv.config();
const PORT = Number(process.env.PORT) || 1234;

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
