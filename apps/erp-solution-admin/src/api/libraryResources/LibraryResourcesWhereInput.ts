import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LibraryResourcesWhereInput = {
  id?: StringFilter;
  author?: StringNullableFilter;
  isbn?: StringNullableFilter;
  publishedDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  availableCopies?: IntNullableFilter;
};
