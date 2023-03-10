import { Sequelize } from "sequelize";
require("dotenv").config({ path: ".env" });

const db = process.env.DB || "db";
const user = process.env.USERNAME || "user";
const pass = process.env.PASS || "pass";
const host = process.env.HOST || "localhost";

const sequelize = new Sequelize(db, user, pass, {
  host: host,
  dialect: "mysql",
  port: 3307,
});

export default sequelize;
