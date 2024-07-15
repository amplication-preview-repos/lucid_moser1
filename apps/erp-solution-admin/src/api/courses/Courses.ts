import { Faculty } from "../faculty/Faculty";
import { Assignments } from "../assignments/Assignments";
import { Exams } from "../exams/Exams";

export type Courses = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  courseName: string | null;
  courseCode: string | null;
  description: string | null;
  credits: number | null;
  faculty?: Faculty | null;
  assignmentsItems?: Array<Assignments>;
  examsItems?: Array<Exams>;
};
