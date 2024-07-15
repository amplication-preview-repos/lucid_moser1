import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CoursesWhereUniqueInput } from "../courses/CoursesWhereUniqueInput";

export type AssignmentsWhereInput = {
  id?: StringFilter;
  dueDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  course?: CoursesWhereUniqueInput;
};
