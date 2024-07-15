import { SortOrder } from "../../util/SortOrder";

export type NotificationsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  timestamp?: SortOrder;
  message?: SortOrder;
  recipient?: SortOrder;
};
