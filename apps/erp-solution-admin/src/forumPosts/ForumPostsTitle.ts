import { ForumPosts as TForumPosts } from "../api/forumPosts/ForumPosts";

export const FORUMPOSTS_TITLE_FIELD = "title";

export const ForumPostsTitle = (record: TForumPosts): string => {
  return record.title?.toString() || String(record.id);
};
