import { Module } from "@nestjs/common";
import { AuthorModuleBase } from "./base/author.module.base";
import { AuthorService } from "./author.service";
import { AuthorResolver } from "./author.resolver";

@Module({
  imports: [AuthorModuleBase],
  providers: [AuthorService, AuthorResolver],
  exports: [AuthorService],
})
export class AuthorModule {}
