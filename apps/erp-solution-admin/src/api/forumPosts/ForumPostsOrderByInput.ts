import { SortOrder } from "../../util/SortOrder";

export type ForumPostsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  content?: SortOrder;
  author?: SortOrder;
  timestamp?: SortOrder;
};
