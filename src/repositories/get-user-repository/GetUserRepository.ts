import { User } from "@prisma/client";
import { IGetUserRepository } from "../../controllers/get-user-controller/protocols";
import { prisma } from "../../utils/prisma";
import { AppError } from "../../errors/AppError";

export class GetUserRepository implements IGetUserRepository {
  async getUser(email: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new AppError("User not find");
    }

    return user;
  }
}
