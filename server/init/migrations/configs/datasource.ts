import { DataSource, DataSourceOptions } from "typeorm";

export default new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "password",
  database: "postgres",
  migrations: ["migrations/scripts/*.ts"],
  entities: ["src/entities/*.entity.ts"],
});
