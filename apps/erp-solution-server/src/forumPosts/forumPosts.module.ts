import { Module } from "@nestjs/common";
import { ForumPostsModuleBase } from "./base/forumPosts.module.base";
import { ForumPostsService } from "./forumPosts.service";
import { ForumPostsController } from "./forumPosts.controller";
import { ForumPostsResolver } from "./forumPosts.resolver";

@Module({
  imports: [ForumPostsModuleBase],
  controllers: [ForumPostsController],
  providers: [ForumPostsService, ForumPostsResolver],
  exports: [ForumPostsService],
})
export class ForumPostsModule {}
