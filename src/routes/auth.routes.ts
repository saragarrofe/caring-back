// src/routes/auth.routes.ts
import { Router, Request, Response, NextFunction } from 'express';
import { login, register } from '../controllers/auth.controller';

const authRoutes: Router = Router();

authRoutes.post('/login', (req: Request, res: Response, next: NextFunction) => {
    login(req, res, next)
        .catch((err) => res.status(500).json({ message: 'Internal server error' }));
});

authRoutes.post('/register', (req: Request, res: Response,  next: NextFunction) => {
    register(req, res, next)
        .catch((err) => res.status(500).json({ message: 'Internal server error' }));
});

export default authRoutes;
