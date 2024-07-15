import * as graphql from "@nestjs/graphql";
import { ForumPostsResolverBase } from "./base/forumPosts.resolver.base";
import { ForumPosts } from "./base/ForumPosts";
import { ForumPostsService } from "./forumPosts.service";

@graphql.Resolver(() => ForumPosts)
export class ForumPostsResolver extends ForumPostsResolverBase {
  constructor(protected readonly service: ForumPostsService) {
    super(service);
  }
}
