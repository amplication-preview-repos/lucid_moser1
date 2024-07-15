import { CoursesWhereUniqueInput } from "../courses/CoursesWhereUniqueInput";

export type AssignmentsUpdateInput = {
  dueDate?: Date | null;
  title?: string | null;
  description?: string | null;
  course?: CoursesWhereUniqueInput | null;
};
