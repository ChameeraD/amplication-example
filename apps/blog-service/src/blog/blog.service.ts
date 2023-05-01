import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlogServiceBase } from "./base/blog.service.base";

@Injectable()
export class BlogService extends BlogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
