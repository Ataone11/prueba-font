import pg from 'pg'
import { db } from "./config.js";
//configuracion de la base de datos posgrest
export const pool = new pg.Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  port: db.port,
  database: db.database,
});

pool.on('connect', () => console.log('DB connected'))