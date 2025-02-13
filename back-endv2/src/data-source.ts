import "reflect-metadata"
import { DataSource } from "typeorm"
import { Customization } from "./entity/Customization"
import { Shop } from "./entity/Shop"
import { Translation } from "./entity/Translation"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456789",
    database: "shopify",
    synchronize: false,
    logging: false,
    entities: [Shop,Customization,Translation],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
