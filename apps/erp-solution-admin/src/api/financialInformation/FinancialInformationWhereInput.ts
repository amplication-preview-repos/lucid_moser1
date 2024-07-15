import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type FinancialInformationWhereInput = {
  id?: StringFilter;
  hostelFee?: FloatNullableFilter;
  paymentStatus?: "Option1";
  paymentDate?: DateTimeNullableFilter;
  tuitionFee?: FloatNullableFilter;
};
