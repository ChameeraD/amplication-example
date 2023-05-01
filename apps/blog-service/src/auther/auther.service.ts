import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AutherServiceBase } from "./base/auther.service.base";

@Injectable()
export class AutherService extends AutherServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
