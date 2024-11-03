
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT ?? 1234;

const SECRET_KEY = process.env.SECRET_KEY || '';


const users = [
    {
        id: 1,
        email: 'admin',
        password: bcrypt.hashSync('admin123', 10),
    }
]

app.disable('x-powered-by')
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
  }));


// prueba
app.get('/get', (req, res) => {
    res.send('Primer mensaje: Get bien gestionado!')
});

// Login
app.post('/login', async (req, res) => {

    // desestructuración
    const { email, password } = req.body;
    
    // el usuario existe?
    const user = users.find((user) => user.email === email);
    if (!user) {
        return res.status(401).json({ message : 'User not found' });
    }

    // Verificar password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(401).json({ message : 'Invalid password' });
    }

    // generar token
    const token = jwt.sign({ email: email}, SECRET_KEY, { expiresIn: '1h'});

    // enviar token al cliente
    res.json({ token });

})


app.listen(PORT, () => {
    console.log(`server listening on port http://localhost:${PORT}`)
});

export default app;