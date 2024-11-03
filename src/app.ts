
// ### Se encarga de configurar la aplicación y no de ejecutarla

// módulos para la api 
import express from 'express'; // manejar rutas y peticiones
import cors from 'cors'; // permitir peticiones entre dominios

// instancia
const app = express();

// configs iniciales
const PORT = process.env.PORT ?? 1234;


app.disable('x-powered-by')
app.use(express.json()); // permite que express maneje peticiones con JSON en el cuerpo

// configuración del cors para permitir peticiones desde un origen específico
app.use(cors({
    origin: 'http://localhost:5173',
  }));


// prueba
app.get('/get', (req, res) => {
    res.send('Primer mensaje: Get bien gestionado!')
});

export default app;