import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CoursesWhereUniqueInput } from "../courses/CoursesWhereUniqueInput";

export type ExamsWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  course?: CoursesWhereUniqueInput;
};
