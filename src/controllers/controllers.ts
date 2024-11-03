import { Request, Response} from 'express';
import bcrypt from 'bcryptjs'; // hash de passwords
import jwt from 'jsonwebtoken'; // generar tokens de autenticación

const SECRET_KEY = process.env.SECRET_KEY || '';


const users = [
    {
        id: 1,
        email: 'admin',
        password: bcrypt.hashSync('admin123', 10),
    }
]


// Login
export const login = async (req: Request, res: Response) => {

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

};