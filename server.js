import express from "express";
import { userRouter } from "./routers/user.router.js";
import { sequelize } from "./models/base.js";
import { config } from "dotenv";
config();
const app = express();
app.use(express.json());
const port = process.env.PORT;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/user", userRouter);
sequelize.sync();
app.listen(port, function () {
  // ...
});
