import { User } from "@prisma/client";
import { Request, Response } from "express";

export interface ICreateUserParams {
  name: string;
  email: string;
  password: string;
}

export interface ICreateUserRepository {
  createUser(params: ICreateUserParams): Promise<User>;
}

export interface ICreateUserController {
  handle(req: Request, res: Response): Promise<Response>;
}
