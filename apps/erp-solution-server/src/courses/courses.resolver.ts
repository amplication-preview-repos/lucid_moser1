import * as graphql from "@nestjs/graphql";
import { CoursesResolverBase } from "./base/courses.resolver.base";
import { Courses } from "./base/Courses";
import { CoursesService } from "./courses.service";

@graphql.Resolver(() => Courses)
export class CoursesResolver extends CoursesResolverBase {
  constructor(protected readonly service: CoursesService) {
    super(service);
  }
}
