import { SortOrder } from "../../util/SortOrder";

export type LibraryResourcesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  author?: SortOrder;
  isbn?: SortOrder;
  publishedDate?: SortOrder;
  title?: SortOrder;
  availableCopies?: SortOrder;
};
