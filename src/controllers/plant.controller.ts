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

export const updatePlant = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const plantRepository = AppDataSource.getRepository(Plant); // objeto que TypeORM da para hacer operaciones sobre una tabla específica
        const plant = await plantRepository.findOneBy({ id: Number(id), user: { id: req.user?.id } });
        
        if(!plant) {
            return res.status(404).json({ message: 'Plant not found' });
        }
        
        const updatePlant =  Object.assign(plant, req.body)
        const savedPlant = await plantRepository.save(updatePlant);

        return res.json(savedPlant)
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

export const deletePlant = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const plantRepository = AppDataSource.getRepository(Plant);
        const plant = await plantRepository.findOneBy({ id: Number(id), user: {id: req.user?.id}});

        if(!plant) {
            return res.status(404).json({ message: 'Plant not found' });
        }

        await plantRepository.delete(Number(id))

        return res.status(204).send()

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
        
    }
}