import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MeetingsService } from "./meetings.service";
import { MeetingsControllerBase } from "./base/meetings.controller.base";

@swagger.ApiTags("meetings")
@common.Controller("meetings")
export class MeetingsController extends MeetingsControllerBase {
  constructor(protected readonly service: MeetingsService) {
    super(service);
  }
}
