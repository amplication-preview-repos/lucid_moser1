import { SortOrder } from "../../util/SortOrder";

export type MeetingsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  dateTime?: SortOrder;
  participants?: SortOrder;
  title?: SortOrder;
};
