import { Module } from "@nestjs/common";
import { ParentsModuleBase } from "./base/parents.module.base";
import { ParentsService } from "./parents.service";
import { ParentsController } from "./parents.controller";
import { ParentsResolver } from "./parents.resolver";

@Module({
  imports: [ParentsModuleBase],
  controllers: [ParentsController],
  providers: [ParentsService, ParentsResolver],
  exports: [ParentsService],
})
export class ParentsModule {}
