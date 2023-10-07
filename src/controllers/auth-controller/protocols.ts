import { Request, Response } from "express";

export interface IAuthParams {
  email: string;
  password: string;
}

export interface IAuthController {
  handle(req: Request, res: Response): Promise<Response>;
}

export interface IAuthRepository {
  createAuth(params: IAuthParams): Promise<object>;
}
