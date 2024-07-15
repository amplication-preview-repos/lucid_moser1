import { SortOrder } from "../../util/SortOrder";

export type ExamsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  date?: SortOrder;
  title?: SortOrder;
  courseId?: SortOrder;
};
