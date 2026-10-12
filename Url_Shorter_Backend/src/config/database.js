import { Sequelize } from "sequelize";
import mysql from "mysql2/promise";

const DB_NAME = process.env.DB_NAME || "url_shortener";
const DB_USER = process.env.DB_USER || "dev";
const DB_PASSWORD = process.env.DB_PASSWORD || "abhiram@2008";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_DIALECT = process.env.DB_DIALECT || "mysql";

const createDatabaseIfNotExists = async () => {
  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
  });

  await connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`,
  );

  await connection.end();
};

await createDatabaseIfNotExists();

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
});

export default sequelize;
