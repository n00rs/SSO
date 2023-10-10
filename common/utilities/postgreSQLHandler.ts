import { Client, ClientConfig } from 'pg';
import ErrHandler from './errorHandler';


/**
 * Get postgres connection
 */
export default async function getDBConnection(){
  let client: Client;
  try {
    const pgConfig =  getPGConfig();
    client = new Client(pgConfig);
    await client.connect(); //todo check the return and verify the connection is established
    return client;
  } catch (error) {
    throw new ErrHandler(error);
  }
}

/**
 * Get postgres configuration
 */
 function getPGConfig():ClientConfig{
  const DB_USER = process.env.DB_USER;
  const DB_PASSWORD = process.env.DB_PASSWORD;
  const DB_HOST = process.env.DB_HOST;
  const DB_PORT = Number(process.env.DB_PORT);
  const DB = process.env.DB;
  return {
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB
  };
}
