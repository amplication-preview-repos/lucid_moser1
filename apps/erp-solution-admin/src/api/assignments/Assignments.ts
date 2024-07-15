import { Courses } from "../courses/Courses";

export type Assignments = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dueDate: Date | null;
  title: string | null;
  description: string | null;
  course?: Courses | null;
};
