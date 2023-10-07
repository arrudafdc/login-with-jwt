import { compare } from "bcryptjs";
import {
  IAuthParams,
  IAuthRepository,
} from "../../controllers/auth-controller/protocols";
import { prisma } from "../../utils/prisma";
import { sign } from "jsonwebtoken";
import { AppError } from "../../errors/AppError";

export class AuthRepository implements IAuthRepository {
  async createAuth(params: IAuthParams): Promise<object> {
    const { email, password } = params;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new AppError("User not found");
    }

    const isValuePassword = await compare(password, user.password);

    if (!isValuePassword) {
      throw new AppError("Password invalid");
    }

    const secret = process.env.SECRET;

    const token = sign({ id: user.id }, secret || "secret");

    const { id } = user;

    return { user: { id, email }, token };
  }
}
