import { Request, Response } from "express";
import { IGetUserController, IGetUserRepository } from "./protocols";
import { AppError } from "../../errors/AppError";

export class GetUserController implements IGetUserController {
  createUserRepository: IGetUserRepository;

  constructor(createUserRepostiroy: IGetUserRepository) {
    this.createUserRepository = createUserRepostiroy;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const email = req.params.email;
      const user = await this.createUserRepository.getUser(email);
      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(400).json(error.message);
      }
      return res.status(500).json({ error: "Something were wrong" });
    }
  }
}
