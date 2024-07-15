import { FacultyWhereUniqueInput } from "../faculty/FacultyWhereUniqueInput";
import { AssignmentsUpdateManyWithoutCoursesItemsInput } from "./AssignmentsUpdateManyWithoutCoursesItemsInput";
import { ExamsUpdateManyWithoutCoursesItemsInput } from "./ExamsUpdateManyWithoutCoursesItemsInput";

export type CoursesUpdateInput = {
  courseName?: string | null;
  courseCode?: string | null;
  description?: string | null;
  credits?: number | null;
  faculty?: FacultyWhereUniqueInput | null;
  assignmentsItems?: AssignmentsUpdateManyWithoutCoursesItemsInput;
  examsItems?: ExamsUpdateManyWithoutCoursesItemsInput;
};
