import { User } from "@prisma/client";
import {
  ICreateUserParams,
  ICreateUserRepository,
} from "../../controllers/create-user-controller/protocols";
import { prisma } from "../../utils/prisma";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/AppError";

export class CreateUserRepository implements ICreateUserRepository {
  async createUser(params: ICreateUserParams): Promise<User> {
    const { name, email, password } = params;

    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User exists");
    }

    const hash_password = await hash(password, 8);
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hash_password,
      },
    });

    return user;
  }
}
