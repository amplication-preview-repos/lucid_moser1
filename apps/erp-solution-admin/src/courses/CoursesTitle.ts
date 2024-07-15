import { Courses as TCourses } from "../api/courses/Courses";

export const COURSES_TITLE_FIELD = "courseName";

export const CoursesTitle = (record: TCourses): string => {
  return record.courseName?.toString() || String(record.id);
};
