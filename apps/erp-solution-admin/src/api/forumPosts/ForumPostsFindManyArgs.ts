import { ForumPostsWhereInput } from "./ForumPostsWhereInput";
import { ForumPostsOrderByInput } from "./ForumPostsOrderByInput";

export type ForumPostsFindManyArgs = {
  where?: ForumPostsWhereInput;
  orderBy?: Array<ForumPostsOrderByInput>;
  skip?: number;
  take?: number;
};
