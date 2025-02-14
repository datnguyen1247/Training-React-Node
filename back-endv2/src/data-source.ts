import "reflect-metadata"
import { DataSource } from "typeorm"
import { Customization } from "./entity/Customization"
import { Shop } from "./entity/Shop"
import { Translation } from "./entity/Translation"
require('dotenv').config()
export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: false,
    entities: [Shop,Customization,Translation],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
