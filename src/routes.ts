import { Router } from "express";
import { CreateUserController } from "./controllers/create-user-controller/CreateUserController";
import { CreateUserRepository } from "./repositories/CreateUserRepository";

export const routes = Router();

routes.post("/create", (req, res) => {
  const createUserRepository = new CreateUserRepository();
  const createUserController = new CreateUserController(createUserRepository);
  createUserController.handle(req, res);
});
