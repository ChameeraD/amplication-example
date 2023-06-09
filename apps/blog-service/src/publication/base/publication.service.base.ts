/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Publication } from "@prisma/client";

export class PublicationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.PublicationCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.PublicationCountArgs>
  ): Promise<number> {
    return this.prisma.publication.count(args);
  }

  async findMany<T extends Prisma.PublicationFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.PublicationFindManyArgs>
  ): Promise<Publication[]> {
    return this.prisma.publication.findMany(args);
  }
  async findOne<T extends Prisma.PublicationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.PublicationFindUniqueArgs>
  ): Promise<Publication | null> {
    return this.prisma.publication.findUnique(args);
  }
  async create<T extends Prisma.PublicationCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PublicationCreateArgs>
  ): Promise<Publication> {
    return this.prisma.publication.create<T>(args);
  }
  async update<T extends Prisma.PublicationUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.PublicationUpdateArgs>
  ): Promise<Publication> {
    return this.prisma.publication.update<T>(args);
  }
  async delete<T extends Prisma.PublicationDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.PublicationDeleteArgs>
  ): Promise<Publication> {
    return this.prisma.publication.delete(args);
  }
}
