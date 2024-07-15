import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FacultyServiceBase } from "./base/faculty.service.base";

@Injectable()
export class FacultyService extends FacultyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
