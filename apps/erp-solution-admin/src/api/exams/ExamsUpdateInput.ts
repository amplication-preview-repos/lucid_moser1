import { CoursesWhereUniqueInput } from "../courses/CoursesWhereUniqueInput";

export type ExamsUpdateInput = {
  description?: string | null;
  date?: Date | null;
  title?: string | null;
  course?: CoursesWhereUniqueInput | null;
};
