import { Courses } from "../courses/Courses";

export type Exams = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  date: Date | null;
  title: string | null;
  course?: Courses | null;
};
