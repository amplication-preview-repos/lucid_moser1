import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MessagesServiceBase } from "./base/messages.service.base";

@Injectable()
export class MessagesService extends MessagesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
