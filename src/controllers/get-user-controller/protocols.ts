import { User } from "@prisma/client";
import { Request, Response } from "express";

export interface IGetUserRepository {
  getUser(): Promise<User[]>;
}

export interface IGetUserController {
  handle(res: Response): Promise<Response>;
}
