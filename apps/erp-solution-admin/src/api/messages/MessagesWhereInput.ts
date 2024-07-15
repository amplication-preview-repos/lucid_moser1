import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessagesWhereInput = {
  id?: StringFilter;
  receiver?: StringNullableFilter;
  messageBody?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  sender?: StringNullableFilter;
};
