import { User } from "@prisma/client";
import { Request, Response } from "express";

export interface IGetUserRepository {
  getUser(email: string): Promise<User>;
}

export interface IGetUserController {
  handle(req: Request, res: Response): Promise<Response>;
}
