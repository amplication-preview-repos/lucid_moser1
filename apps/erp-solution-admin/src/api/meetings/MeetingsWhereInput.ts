import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MeetingsWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  dateTime?: DateTimeNullableFilter;
  participants?: StringNullableFilter;
  title?: StringNullableFilter;
};
