import { Request, Response } from "express";
import { IGetUserController, IGetUserRepository } from "./protocols";

export class GetUserController implements IGetUserController {
  createUserRepository: IGetUserRepository;

  constructor(createUserRepostiroy: IGetUserRepository) {
    this.createUserRepository = createUserRepostiroy;
  }

  async handle(res: Response): Promise<Response> {
    const user = await this.createUserRepository.getUser();
    return res.status(201).json(user);
  }
}
