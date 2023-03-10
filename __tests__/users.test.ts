import request from "supertest";
import express from "express";
import router from "../router";
import sequelize from "../server";

const app = express();
const port = 4000;
require("dotenv").config();

beforeAll(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    app.listen(port, () => {
      console.log(`Server is up and running at: http://localhost:${port}`);
    });
  } catch (error: any) {
    console.error("Unable to connect to the database:", error.original);
  }
});

afterEach(async () => {
  await sequelize.close();
});

app.use("/api", router);

describe("User Routes", function () {
  it("should create a user", async () => {
    const res = await request(app).get("/users");
    expect(res.status).toBe(200);
  });
});
