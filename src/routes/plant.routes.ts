import { Router, Request, Response, NextFunction } from 'express';
import { createPlant, getPlants } from '../controllers/plant.controller';
import { verifyToken } from '../middlewares/auth.middleware';

const plantRoutes: Router = Router();

plantRoutes.get('/', verifyToken, getPlants);
  plantRoutes.post('/', verifyToken, createPlant);

export default plantRoutes;
   