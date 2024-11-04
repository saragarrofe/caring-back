import { DataSource } from "typeorm";
import { Plant } from "../entities/Plant";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
  type: 'mysql',                
  host: process.env.DB_HOST,   
  port: Number(process.env.DB_PORT) || 1234,   
  username: process.env.DB_USER,    
  password: process.env.DB_PASSWORD,   
  database: process.env.DB_NAME,      
  synchronize: process.env.NODE_ENVIRONMENT === "development",    //  sincronizar las entidades con la base de datos en DESARROLLO SOLO 
  logging: true,        // activar el logging para ver las consultas que ejecuta TypeORM
  entities: [Plant, User],   
  migrations: ['src/orm/migration/*.ts'],  
  subscribers: [],

})