import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "data/database.sqlite",
    "entities": [
        "entity/**/*.ts"
    ],
    synchronize: true,
    logging: false
})