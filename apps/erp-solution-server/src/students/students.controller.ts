import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StudentsService } from "./students.service";
import { StudentsControllerBase } from "./base/students.controller.base";

@swagger.ApiTags("students")
@common.Controller("students")
export class StudentsController extends StudentsControllerBase {
  constructor(protected readonly service: StudentsService) {
    super(service);
  }
}
