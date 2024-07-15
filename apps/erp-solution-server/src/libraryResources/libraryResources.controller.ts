import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LibraryResourcesService } from "./libraryResources.service";
import { LibraryResourcesControllerBase } from "./base/libraryResources.controller.base";

@swagger.ApiTags("libraryResources")
@common.Controller("libraryResources")
export class LibraryResourcesController extends LibraryResourcesControllerBase {
  constructor(protected readonly service: LibraryResourcesService) {
    super(service);
  }
}
