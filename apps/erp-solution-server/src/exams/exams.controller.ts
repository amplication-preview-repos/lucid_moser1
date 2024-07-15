import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExamsService } from "./exams.service";
import { ExamsControllerBase } from "./base/exams.controller.base";

@swagger.ApiTags("exams")
@common.Controller("exams")
export class ExamsController extends ExamsControllerBase {
  constructor(protected readonly service: ExamsService) {
    super(service);
  }
}
