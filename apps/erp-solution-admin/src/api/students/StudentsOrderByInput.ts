import { SortOrder } from "../../util/SortOrder";

export type StudentsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  enrollmentNumber?: SortOrder;
  rollNumber?: SortOrder;
  registrationNumber?: SortOrder;
};
