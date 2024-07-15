import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NotificationsServiceBase } from "./base/notifications.service.base";

@Injectable()
export class NotificationsService extends NotificationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
