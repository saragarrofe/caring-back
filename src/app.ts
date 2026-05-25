// ### Se encarga de configurar la aplicación y no de ejecutarla
// Configura middleware, distribuye rutas

// módulos para la api 
import 'reflect-metadata'; // es necesario para TypeORM
import express from 'express'; // manejar rutas y peticiones
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';
import cors from 'cors'; // permitir peticiones entre dominios

const app = express();

app.disable('x-powered-by')
app.use(express.json()); // permite que express maneje peticiones con JSON en el cuerpo

// configuración del cors para permitir peticiones desde un origen específico
app.use(cors({
    origin: 'http://localhost:5173',
  }));

app.use('/auth', authRoutes); 
app.use('/user', userRoutes); 





export default app;