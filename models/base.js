import { config } from "dotenv";
import { Sequelize } from "sequelize";
config();

export const sequelize = new Sequelize({
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  dialect: "postgres",
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
});

try {
  sequelize.authenticate();
  console.log("connect success");
} catch (error) {
  console.log("Connect error");
}
