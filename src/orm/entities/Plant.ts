import { CareLevel, LightLevel, PlantLocation } from "../../types/plant";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { WateringEntry } from "./WateringEntry";
import { User } from "./User";

@Entity()
export class Plant {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ nullable: true })
    nickname?: string;

    @Column()
    careLevel!: CareLevel;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })                                                                                                      
    user!: User;
    
    @Column()
    species!: string;

    @Column()
    imageUrl!: string;

    @Column()
    lastWatered!: string;

    @Column()
    light!: LightLevel;

    @Column()
    wateringFrequency!: number;

    @OneToMany(() => WateringEntry, (entry) => entry.plant, { cascade: true })
    wateringHistory?: WateringEntry[];

    @Column({ nullable: true })
    location?: PlantLocation;

}
