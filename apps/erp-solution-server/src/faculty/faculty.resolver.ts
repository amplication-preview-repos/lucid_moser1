import * as graphql from "@nestjs/graphql";
import { FacultyResolverBase } from "./base/faculty.resolver.base";
import { Faculty } from "./base/Faculty";
import { FacultyService } from "./faculty.service";

@graphql.Resolver(() => Faculty)
export class FacultyResolver extends FacultyResolverBase {
  constructor(protected readonly service: FacultyService) {
    super(service);
  }
}
