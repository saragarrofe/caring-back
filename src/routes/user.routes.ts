import { Router } from 'express';
import { getUserProfile } from '../controllers/user.controller';

const userRoutes = Router();

userRoutes.post('/profile', getUserProfile);

export default userRoutes; 