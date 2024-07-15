import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CoursesService } from "./courses.service";
import { CoursesControllerBase } from "./base/courses.controller.base";

@swagger.ApiTags("courses")
@common.Controller("courses")
export class CoursesController extends CoursesControllerBase {
  constructor(protected readonly service: CoursesService) {
    super(service);
  }
}
