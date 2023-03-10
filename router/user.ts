import { Router } from "express";

const userRouter = Router();

userRouter.post("/", () => {
  console.log("create user");
});
userRouter.patch("/");
userRouter.delete("/");
userRouter.get("/");

export default userRouter;
