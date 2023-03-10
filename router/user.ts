import { Router } from "express";
import { createUser } from "../handlers/userHandlers";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.patch("/");
userRouter.delete("/");
userRouter.get("/");

export default userRouter;
