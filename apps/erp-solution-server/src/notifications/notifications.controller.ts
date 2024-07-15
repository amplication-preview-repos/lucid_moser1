import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NotificationsService } from "./notifications.service";
import { NotificationsControllerBase } from "./base/notifications.controller.base";

@swagger.ApiTags("notifications")
@common.Controller("notifications")
export class NotificationsController extends NotificationsControllerBase {
  constructor(protected readonly service: NotificationsService) {
    super(service);
  }
}
