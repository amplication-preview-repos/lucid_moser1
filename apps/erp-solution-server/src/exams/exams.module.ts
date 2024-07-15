import { Module } from "@nestjs/common";
import { ExamsModuleBase } from "./base/exams.module.base";
import { ExamsService } from "./exams.service";
import { ExamsController } from "./exams.controller";
import { ExamsResolver } from "./exams.resolver";

@Module({
  imports: [ExamsModuleBase],
  controllers: [ExamsController],
  providers: [ExamsService, ExamsResolver],
  exports: [ExamsService],
})
export class ExamsModule {}
