import * as graphql from "@nestjs/graphql";
import { LibraryResourcesResolverBase } from "./base/libraryResources.resolver.base";
import { LibraryResources } from "./base/LibraryResources";
import { LibraryResourcesService } from "./libraryResources.service";

@graphql.Resolver(() => LibraryResources)
export class LibraryResourcesResolver extends LibraryResourcesResolverBase {
  constructor(protected readonly service: LibraryResourcesService) {
    super(service);
  }
}
