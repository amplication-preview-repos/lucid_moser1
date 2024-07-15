import { Courses } from "../courses/Courses";

export type Faculty = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phoneNumber: string | null;
  officeHours: string | null;
  department: string | null;
  coursesItems?: Array<Courses>;
  role: string | null;
};
