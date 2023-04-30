import { Module } from "@nestjs/common";
import { AutherModuleBase } from "./base/auther.module.base";
import { AutherService } from "./auther.service";
import { AutherResolver } from "./auther.resolver";

@Module({
  imports: [AutherModuleBase],
  providers: [AutherService, AutherResolver],
  exports: [AutherService],
})
export class AutherModule {}
