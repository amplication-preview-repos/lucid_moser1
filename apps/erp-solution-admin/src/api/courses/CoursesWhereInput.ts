import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FacultyWhereUniqueInput } from "../faculty/FacultyWhereUniqueInput";
import { AssignmentsListRelationFilter } from "../assignments/AssignmentsListRelationFilter";
import { ExamsListRelationFilter } from "../exams/ExamsListRelationFilter";

export type CoursesWhereInput = {
  id?: StringFilter;
  courseName?: StringNullableFilter;
  courseCode?: StringNullableFilter;
  description?: StringNullableFilter;
  credits?: IntNullableFilter;
  faculty?: FacultyWhereUniqueInput;
  assignmentsItems?: AssignmentsListRelationFilter;
  examsItems?: ExamsListRelationFilter;
};
