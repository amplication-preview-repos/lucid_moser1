import { SortOrder } from "../../util/SortOrder";

export type FacultyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  officeHours?: SortOrder;
  department?: SortOrder;
  role?: SortOrder;
};
