import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const SECRET_KEY = process.env.SECRET_KEY || 'default_secret_key';

interface JwtPayload {
    id: number
    email: string
}

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        const token = authHeader?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: 'No token' });
        }

        const decoded = jwt.verify(token, SECRET_KEY);

        req.user = decoded ;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}