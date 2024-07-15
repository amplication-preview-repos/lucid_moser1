/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ForumPosts as PrismaForumPosts } from "@prisma/client";

export class ForumPostsServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ForumPostsCountArgs, "select">
  ): Promise<number> {
    return this.prisma.forumPosts.count(args);
  }

  async forumPostsItems(
    args: Prisma.ForumPostsFindManyArgs
  ): Promise<PrismaForumPosts[]> {
    return this.prisma.forumPosts.findMany(args);
  }
  async forumPosts(
    args: Prisma.ForumPostsFindUniqueArgs
  ): Promise<PrismaForumPosts | null> {
    return this.prisma.forumPosts.findUnique(args);
  }
  async createForumPosts(
    args: Prisma.ForumPostsCreateArgs
  ): Promise<PrismaForumPosts> {
    return this.prisma.forumPosts.create(args);
  }
  async updateForumPosts(
    args: Prisma.ForumPostsUpdateArgs
  ): Promise<PrismaForumPosts> {
    return this.prisma.forumPosts.update(args);
  }
  async deleteForumPosts(
    args: Prisma.ForumPostsDeleteArgs
  ): Promise<PrismaForumPosts> {
    return this.prisma.forumPosts.delete(args);
  }
}
