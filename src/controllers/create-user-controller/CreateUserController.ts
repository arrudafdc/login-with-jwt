import { ICreateUserController, ICreateUserRepository } from "./protocols";
import { Request, Response } from "express";

export class CreateUserController implements ICreateUserController {
  createUserRepository: ICreateUserRepository;

  constructor(createUserRepostiroy: ICreateUserRepository) {
    this.createUserRepository = createUserRepostiroy;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const body = req.body;
    const user = await this.createUserRepository.createUser(body);
    return res.status(201).json(user);
  }
}
