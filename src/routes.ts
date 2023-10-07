import { Router } from "express";
import { CreateUserController } from "./controllers/create-user-controller/CreateUserController";
import { CreateUserRepository } from "./repositories/create-user-repository/CreateUserRepository";
import { GetUserController } from "./controllers/get-user-controller/GetUserController";
import { GetUserRepository } from "./repositories/get-user-repository/GetUserRepository";
import { AuthRepository } from "./repositories/auth-repository/AuthRepository";
import { AuthController } from "./controllers/auth-controller/AuthController";
import { authMiddleware } from "./middlewares/auth";

export const routes = Router();

routes.get("/user/:email", authMiddleware, (req, res) => {
  const getUserRepository = new GetUserRepository();
  const getUserController = new GetUserController(getUserRepository);
  getUserController.handle(req, res);
});

routes.post("/user/create", (req, res) => {
  const createUserRepository = new CreateUserRepository();
  const createUserController = new CreateUserController(createUserRepository);
  createUserController.handle(req, res);
});

routes.post("/auth", (req, res) => {
  const authRepository = new AuthRepository();
  const authController = new AuthController(authRepository);
  authController.handle(req, res);
});
