import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PublicationServiceBase } from "./base/publication.service.base";

@Injectable()
export class PublicationService extends PublicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
