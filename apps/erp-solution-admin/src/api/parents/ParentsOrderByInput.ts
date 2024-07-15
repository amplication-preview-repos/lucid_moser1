import { SortOrder } from "../../util/SortOrder";

export type ParentsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  address?: SortOrder;
};
