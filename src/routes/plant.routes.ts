import { Router, Request, Response, NextFunction } from 'express';
import { createPlant, deletePlant, getPlants, updatePlant } from '../controllers/plant.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const plantRoutes: Router = Router();

plantRoutes.get('/', verifyToken, getPlants);
plantRoutes.post('/', verifyToken, createPlant);
plantRoutes.patch('/:id', verifyToken, updatePlant);
plantRoutes.delete('/:id', verifyToken, deletePlant)

export default plantRoutes;
   