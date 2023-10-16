import { Sequelize } from "sequelize";
import { sequelize } from "./base.js";

const User = sequelize.define("user", {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  fullName: {
    type: Sequelize.STRING,
  },
  birthdate: {
    type: Sequelize.DATE,
  },
});