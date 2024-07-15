import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type NotificationsWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  message?: StringNullableFilter;
  recipient?: StringNullableFilter;
};
