import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExamsServiceBase } from "./base/exams.service.base";

@Injectable()
export class ExamsService extends ExamsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
