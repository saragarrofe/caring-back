import { Request, Response} from 'express';
import { AppDataSource } from '../orm/config/data-source';
import { Plant } from '../orm/entities/Plant';

export const getPlants = async (req: Request, res: Response) => {
    try {
        const plants = await AppDataSource.getRepository(Plant).findBy({ user: { id: req.user?.id } });
        return res.json(plants);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }

}

export const createPlant = async (req: Request, res: Response) => {
    try {
        const plantRepository = AppDataSource.getRepository(Plant);
        const newPlant = plantRepository.create({ ...req.body, user: { id: req.user?.id } });
        const savedPlant = await plantRepository.save(newPlant);
        return res.status(201).json(savedPlant);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}