import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParentsService } from "./parents.service";
import { ParentsControllerBase } from "./base/parents.controller.base";

@swagger.ApiTags("parents")
@common.Controller("parents")
export class ParentsController extends ParentsControllerBase {
  constructor(protected readonly service: ParentsService) {
    super(service);
  }
}
