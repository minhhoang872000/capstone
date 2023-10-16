import express from "express";
import { userRouter } from "./routers/user.router.js";

const app = express();

const port = 3000;

app.use("/user", userRouter);
app.listen(port, () => {
  console.log("server is running on port ");
});
