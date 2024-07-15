import { Module } from "@nestjs/common";
import { StudentsModuleBase } from "./base/students.module.base";
import { StudentsService } from "./students.service";
import { StudentsController } from "./students.controller";
import { StudentsResolver } from "./students.resolver";

@Module({
  imports: [StudentsModuleBase],
  controllers: [StudentsController],
  providers: [StudentsService, StudentsResolver],
  exports: [StudentsService],
})
export class StudentsModule {}
