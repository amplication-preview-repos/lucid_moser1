import { SortOrder } from "../../util/SortOrder";

export type CoursesOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  courseName?: SortOrder;
  courseCode?: SortOrder;
  description?: SortOrder;
  credits?: SortOrder;
  facultyId?: SortOrder;
};
