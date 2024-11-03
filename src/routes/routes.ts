import { Router } from 'express';
import { login } from '../controllers/controllers';

const router = Router();

router.post('/login', login);

export default router; 