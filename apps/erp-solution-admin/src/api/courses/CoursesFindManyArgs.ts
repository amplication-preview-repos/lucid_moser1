import { CoursesWhereInput } from "./CoursesWhereInput";
import { CoursesOrderByInput } from "./CoursesOrderByInput";

export type CoursesFindManyArgs = {
  where?: CoursesWhereInput;
  orderBy?: Array<CoursesOrderByInput>;
  skip?: number;
  take?: number;
};
