import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
  import { Plant } from './Plant';

  @Entity()
  export class WateringEntry {
      @PrimaryGeneratedColumn()
      id!: number;

      @Column()
      date!: string;

      @Column({ nullable: true })
      note?: string;

      @ManyToOne(() => Plant, (plant) => plant.wateringHistory, { onDelete: 'CASCADE' })
      plant!: Plant;
  }