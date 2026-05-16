import { Request, Response} from 'express';
import { AppDataSource } from '../orm/config/data-source';
import { User } from '../orm/entities/User';

export const getUserProfile = async (req: Request, res: Response) => {
    try {
        const user = await AppDataSource.getRepository(User).findOneBy({ id: req.user?.id }); 
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const { password, ...userData } = user;
        res.json(userData);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }

};
