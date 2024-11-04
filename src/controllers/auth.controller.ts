import { NextFunction, Request, Response} from 'express';
import { AppDataSource } from '../orm/config/data-source';
import bcrypt from 'bcryptjs'; // hash de passwords
import jwt from 'jsonwebtoken'; // generar tokens de autenticación
import { User } from '../orm/entities/User';
import { error } from 'console';

const SECRET_KEY = process.env.SECRET_KEY || '';

// Login
export const login = async (req: Request, res: Response, next: NextFunction) => {

    // desestructuración
    const { email, password } = req.body;
    
    // el usuario existe?
    const user = await AppDataSource.getRepository(User).findOneBy({email});
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
    return res.json({ token });

};

export const register = async (req: Request, res: Response, next: NextFunction) => {

    try {
        // desestructuración 
        const { email, password } = req.body; 
    
        // verificar si el usuario ya existe
        const existingUser = await AppDataSource.getRepository(User).findOneBy({email});
    
        if(existingUser) {
            return res.status(400).json({ message: 'User exists' });
        }
    
        // encriptar password
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // crear nuevo usuario
        const user = new User();
        user.email = email;
        user.password = hashedPassword;
    
        try {
            await AppDataSource.getRepository(User).save(user);
            return res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Error registering user' });
        }
    } catch (error) {   
        console.error(error);  
        // return res.status(500).json({ message: 'Error  saving user' });    
    }
    next(error);
}