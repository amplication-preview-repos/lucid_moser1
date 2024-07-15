import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ForumPostsServiceBase } from "./base/forumPosts.service.base";

@Injectable()
export class ForumPostsService extends ForumPostsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
