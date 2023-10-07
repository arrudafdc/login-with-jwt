import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [, token] = authorization.split(" ");

  try {
    const secret = process.env.SECRET;
    verify(token, secret || "secret");
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalid" });
  }
}
