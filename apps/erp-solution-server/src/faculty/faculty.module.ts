import { Module } from "@nestjs/common";
import { FacultyModuleBase } from "./base/faculty.module.base";
import { FacultyService } from "./faculty.service";
import { FacultyController } from "./faculty.controller";
import { FacultyResolver } from "./faculty.resolver";

@Module({
  imports: [FacultyModuleBase],
  controllers: [FacultyController],
  providers: [FacultyService, FacultyResolver],
  exports: [FacultyService],
})
export class FacultyModule {}
