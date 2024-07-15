import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ForumPostsWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  content?: StringNullableFilter;
  author?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
