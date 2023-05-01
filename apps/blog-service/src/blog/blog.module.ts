import { Module } from "@nestjs/common";
import { BlogModuleBase } from "./base/blog.module.base";
import { BlogService } from "./blog.service";
import { BlogResolver } from "./blog.resolver";

@Module({
  imports: [BlogModuleBase],
  providers: [BlogService, BlogResolver],
  exports: [BlogService],
})
export class BlogModule {}
