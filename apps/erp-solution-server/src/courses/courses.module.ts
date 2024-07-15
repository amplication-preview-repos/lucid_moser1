import { Module } from "@nestjs/common";
import { CoursesModuleBase } from "./base/courses.module.base";
import { CoursesService } from "./courses.service";
import { CoursesController } from "./courses.controller";
import { CoursesResolver } from "./courses.resolver";

@Module({
  imports: [CoursesModuleBase],
  controllers: [CoursesController],
  providers: [CoursesService, CoursesResolver],
  exports: [CoursesService],
})
export class CoursesModule {}
