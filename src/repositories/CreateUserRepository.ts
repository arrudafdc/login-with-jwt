import { User } from "@prisma/client";
import {
  ICreateUserParams,
  ICreateUserRepository,
} from "../controllers/create-user-controller/protocols";
import { prisma } from "../utils/prisma";

export class CreateUserRepository implements ICreateUserRepository {
  createUser(params: ICreateUserParams): Promise<User> {
    const { name, email, password } = params;
    const user = prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return user;
  }
}
