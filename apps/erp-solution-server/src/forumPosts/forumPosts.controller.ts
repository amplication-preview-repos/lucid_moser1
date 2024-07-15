import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ForumPostsService } from "./forumPosts.service";
import { ForumPostsControllerBase } from "./base/forumPosts.controller.base";

@swagger.ApiTags("forumPosts")
@common.Controller("forumPosts")
export class ForumPostsController extends ForumPostsControllerBase {
  constructor(protected readonly service: ForumPostsService) {
    super(service);
  }
}
