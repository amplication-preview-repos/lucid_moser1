import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CoursesListRelationFilter } from "../courses/CoursesListRelationFilter";

export type FacultyWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  officeHours?: StringNullableFilter;
  department?: StringNullableFilter;
  coursesItems?: CoursesListRelationFilter;
  role?: StringNullableFilter;
};
