import { Module } from "@nestjs/common";
import { LibraryResourcesModuleBase } from "./base/libraryResources.module.base";
import { LibraryResourcesService } from "./libraryResources.service";
import { LibraryResourcesController } from "./libraryResources.controller";
import { LibraryResourcesResolver } from "./libraryResources.resolver";

@Module({
  imports: [LibraryResourcesModuleBase],
  controllers: [LibraryResourcesController],
  providers: [LibraryResourcesService, LibraryResourcesResolver],
  exports: [LibraryResourcesService],
})
export class LibraryResourcesModule {}
