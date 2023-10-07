import { Router } from "express";
import { CreateUserController } from "./controllers/create-user-controller/CreateUserController";
import { CreateUserRepository } from "./repositories/create-user-repository/CreateUserRepository";
import { GetUserController } from "./controllers/get-user-controller/GetUsersController";
import { GetUserRepository } from "./repositories/get-users-repository/GetUsersRepository";
import { AuthRepository } from "./repositories/auth-repository/AuthRepository";
import { AuthController } from "./controllers/auth-controller/AuthController";

export const routes = Router();

routes.get("/users", (req, res) => {
  const getUserRepository = new GetUserRepository();
  const getUserController = new GetUserController(getUserRepository);
  getUserController.handle(res);
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
