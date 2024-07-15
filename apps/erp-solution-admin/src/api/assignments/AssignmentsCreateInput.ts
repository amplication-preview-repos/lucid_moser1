import { CoursesWhereUniqueInput } from "../courses/CoursesWhereUniqueInput";

export type AssignmentsCreateInput = {
  dueDate?: Date | null;
  title?: string | null;
  description?: string | null;
  course?: CoursesWhereUniqueInput | null;
};
