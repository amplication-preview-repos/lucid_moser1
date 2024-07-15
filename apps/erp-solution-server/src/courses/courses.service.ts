import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CoursesServiceBase } from "./base/courses.service.base";

@Injectable()
export class CoursesService extends CoursesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
