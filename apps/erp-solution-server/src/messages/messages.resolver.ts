import * as graphql from "@nestjs/graphql";
import { MessagesResolverBase } from "./base/messages.resolver.base";
import { Messages } from "./base/Messages";
import { MessagesService } from "./messages.service";

@graphql.Resolver(() => Messages)
export class MessagesResolver extends MessagesResolverBase {
  constructor(protected readonly service: MessagesService) {
    super(service);
  }
}
