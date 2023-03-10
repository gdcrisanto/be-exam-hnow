import express from "express";
import rootRouter from "./router";
import sequelize from "./server";

const app = express();
const port = 4000;

app.use("/api", rootRouter);

const initApp = async () => {
  console.log("Testing the database connection..");

  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    sequelize.sync({
      alter: true,
    });

    app.listen(port, () => {
      console.log(`Server is up and running at: http://localhost:${port}`);
    });
  } catch (error: any) {
    console.error("Unable to connect to the database:", error.original);
  }
};

initApp();
