import { Router } from "express";
import { CreateUserController } from "./controllers/create-user-controller/CreateUserController";
import { CreateUserRepository } from "./repositories/create-user-repository/CreateUserRepository";
import { GetUserController } from "./controllers/get-user-controller/GetUsersController";
import { GetUserRepository } from "./repositories/get-users-repository/GetUsersRepository";

export const routes = Router();

routes.get("/users", (req, res) => {
  const getUserRepository = new GetUserRepository();
  const getUserController = new GetUserController(getUserRepository);
  getUserController.handle(res);
});

routes.post("/create", (req, res) => {
  const createUserRepository = new CreateUserRepository();
  const createUserController = new CreateUserController(createUserRepository);
  createUserController.handle(req, res);
});
