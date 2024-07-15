import { Module } from "@nestjs/common";
import { NotificationsModuleBase } from "./base/notifications.module.base";
import { NotificationsService } from "./notifications.service";
import { NotificationsController } from "./notifications.controller";
import { NotificationsResolver } from "./notifications.resolver";

@Module({
  imports: [NotificationsModuleBase],
  controllers: [NotificationsController],
  providers: [NotificationsService, NotificationsResolver],
  exports: [NotificationsService],
})
export class NotificationsModule {}
