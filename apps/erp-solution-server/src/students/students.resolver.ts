import * as graphql from "@nestjs/graphql";
import { StudentsResolverBase } from "./base/students.resolver.base";
import { Students } from "./base/Students";
import { StudentsService } from "./students.service";

@graphql.Resolver(() => Students)
export class StudentsResolver extends StudentsResolverBase {
  constructor(protected readonly service: StudentsService) {
    super(service);
  }
}
