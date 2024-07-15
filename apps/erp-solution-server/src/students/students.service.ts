import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StudentsServiceBase } from "./base/students.service.base";

@Injectable()
export class StudentsService extends StudentsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
