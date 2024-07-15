import * as graphql from "@nestjs/graphql";
import { ParentsResolverBase } from "./base/parents.resolver.base";
import { Parents } from "./base/Parents";
import { ParentsService } from "./parents.service";

@graphql.Resolver(() => Parents)
export class ParentsResolver extends ParentsResolverBase {
  constructor(protected readonly service: ParentsService) {
    super(service);
  }
}
