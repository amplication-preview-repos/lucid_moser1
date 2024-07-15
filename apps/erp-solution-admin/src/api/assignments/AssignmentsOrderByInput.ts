import { SortOrder } from "../../util/SortOrder";

export type AssignmentsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dueDate?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  courseId?: SortOrder;
};
