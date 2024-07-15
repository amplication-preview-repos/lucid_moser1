import { FacultyWhereUniqueInput } from "../faculty/FacultyWhereUniqueInput";
import { AssignmentsCreateNestedManyWithoutCoursesItemsInput } from "./AssignmentsCreateNestedManyWithoutCoursesItemsInput";
import { ExamsCreateNestedManyWithoutCoursesItemsInput } from "./ExamsCreateNestedManyWithoutCoursesItemsInput";

export type CoursesCreateInput = {
  courseName?: string | null;
  courseCode?: string | null;
  description?: string | null;
  credits?: number | null;
  faculty?: FacultyWhereUniqueInput | null;
  assignmentsItems?: AssignmentsCreateNestedManyWithoutCoursesItemsInput;
  examsItems?: ExamsCreateNestedManyWithoutCoursesItemsInput;
};
