import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../server";

export const User = sequelize.define("app_users", {
  fname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postCode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactNo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
