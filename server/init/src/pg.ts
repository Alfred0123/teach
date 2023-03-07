import { DataSource } from "typeorm";
import { SampleT } from "src/entities/sample.entity";

export class PostgresService {
  private static datasource: DataSource;

  constructor() {}

  public static async Create() {
    if (this.datasource === undefined) {
      const datasource = await new DataSource({
        host: "localhost",
        port: 5432,
        type: "postgres",
        database: "postgres",
        username: "postgres",
        password: "password",
        logging: true,
        synchronize: false,
        migrationsRun: true,
        migrations: ["dist/migrations/scripts/*.js"],
        // autoLoadEntities: true;
        entities: ["dist/src/entities/*.entity.js"],
      }).initialize();
      this.datasource = datasource;
      return this.datasource;
    }
    return this.datasource;
  }
}
