import { Router } from "express";

export const userRouter = Router();

userRouter.get("/", (req, res, next) => {
  console.log("Router user");
});
