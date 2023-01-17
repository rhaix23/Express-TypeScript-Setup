import Pool from "pg";
import env from "dotenv";
env.config();

export const pool = new Pool.Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT as unknown as number,
});
