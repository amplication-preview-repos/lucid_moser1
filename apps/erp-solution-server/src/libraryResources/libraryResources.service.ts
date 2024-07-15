import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LibraryResourcesServiceBase } from "./base/libraryResources.service.base";

@Injectable()
export class LibraryResourcesService extends LibraryResourcesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
