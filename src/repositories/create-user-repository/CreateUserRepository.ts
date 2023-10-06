import { User } from "@prisma/client";
import {
  ICreateUserParams,
  ICreateUserRepository,
} from "../../controllers/create-user-controller/protocols";
import { prisma } from "../../utils/prisma";
import { hash } from "bcryptjs";

export class CreateUserRepository implements ICreateUserRepository {
  async createUser(params: ICreateUserParams): Promise<User> {
    const { name, email, password } = params;
    const hash_password = await hash(password, 8);
    const user = prisma.user.create({
      data: {
        name,
        email,
        password: hash_password,
      },
    });

    return user;
  }
}
