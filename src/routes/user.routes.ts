import { Router } from 'express';
import { getUserProfile } from '../controllers/user.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const userRoutes = Router();

userRoutes.get('/profile', verifyToken, getUserProfile);

export default userRoutes; 