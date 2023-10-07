import { Request, Response } from "express";
import { IAuthController, IAuthRepository } from "./protocols";
import { AppError } from "../../errors/AppError";

export class AuthController implements IAuthController {
  authRepository: IAuthRepository;

  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const body = req.body;
      const token = await this.authRepository.createAuth(body);
      return res.status(201).json(token);
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(400).json(error.message);
      }
      return res.status(500).json({ error: "Something went wrong" });
    }
  }
}
