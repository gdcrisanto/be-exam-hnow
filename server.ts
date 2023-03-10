import { Sequelize } from "sequelize";

const sequelize = new Sequelize("test", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3307,
});

export default sequelize;
