import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MeetingsServiceBase } from "./base/meetings.service.base";

@Injectable()
export class MeetingsService extends MeetingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
