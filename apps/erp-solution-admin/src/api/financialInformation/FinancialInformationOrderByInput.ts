import { SortOrder } from "../../util/SortOrder";

export type FinancialInformationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  hostelFee?: SortOrder;
  paymentStatus?: SortOrder;
  paymentDate?: SortOrder;
  tuitionFee?: SortOrder;
};
