import { Pool } from "pg";

export class PostgresService {
  public static pool: Pool;

  constructor() {}

  public static async Create() {
    if (this.pool === undefined) {
      const pool = new Pool({
        host: "localhost",
        user: "postgres",
        password: "password",
        max: 20,
        idleTimeoutMillis: 30000,
        connectionTimeoutMillis: 2000,
      });
      await pool.connect();
      this.pool = pool;
      return this.pool;
    }
    return this.pool;
  }
}
