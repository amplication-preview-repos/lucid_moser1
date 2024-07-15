import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MessagesService } from "./messages.service";
import { MessagesControllerBase } from "./base/messages.controller.base";

@swagger.ApiTags("messages")
@common.Controller("messages")
export class MessagesController extends MessagesControllerBase {
  constructor(protected readonly service: MessagesService) {
    super(service);
  }
}
