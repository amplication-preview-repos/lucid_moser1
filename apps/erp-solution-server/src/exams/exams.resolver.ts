import * as graphql from "@nestjs/graphql";
import { ExamsResolverBase } from "./base/exams.resolver.base";
import { Exams } from "./base/Exams";
import { ExamsService } from "./exams.service";

@graphql.Resolver(() => Exams)
export class ExamsResolver extends ExamsResolverBase {
  constructor(protected readonly service: ExamsService) {
    super(service);
  }
}
