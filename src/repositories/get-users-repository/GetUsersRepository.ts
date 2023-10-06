import { User } from "@prisma/client";
import { IGetUserRepository } from "../../controllers/get-user-controller/protocols";
import { prisma } from "../../utils/prisma";

export class GetUserRepository implements IGetUserRepository {
  async getUser(): Promise<User[]> {
    const users = await prisma.user.findMany({});
    return users;
  }
}
