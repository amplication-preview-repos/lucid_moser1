import * as graphql from "@nestjs/graphql";
import { MeetingsResolverBase } from "./base/meetings.resolver.base";
import { Meetings } from "./base/Meetings";
import { MeetingsService } from "./meetings.service";

@graphql.Resolver(() => Meetings)
export class MeetingsResolver extends MeetingsResolverBase {
  constructor(protected readonly service: MeetingsService) {
    super(service);
  }
}
