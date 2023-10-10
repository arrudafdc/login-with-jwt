import { User } from "@prisma/client";
import { Request, Response } from "express";

export interface IGetUserRepository {
  getUser(email: string): Promise<object>;
}

export interface IGetUserController {
  handle(req: Request, res: Response): Promise<Response>;
}
