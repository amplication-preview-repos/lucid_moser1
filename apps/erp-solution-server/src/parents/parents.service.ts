import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParentsServiceBase } from "./base/parents.service.base";

@Injectable()
export class ParentsService extends ParentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
