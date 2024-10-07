
import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 1234;

app.disable('x-powered-by')
app.use(express.json());

app.get('/get', (req, res) => {
    res.send('Primer mensaje: Get bien gestionado!')
});

app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
});

export default app;