import * as graphql from "@nestjs/graphql";
import { NotificationsResolverBase } from "./base/notifications.resolver.base";
import { Notifications } from "./base/Notifications";
import { NotificationsService } from "./notifications.service";

@graphql.Resolver(() => Notifications)
export class NotificationsResolver extends NotificationsResolverBase {
  constructor(protected readonly service: NotificationsService) {
    super(service);
  }
}
