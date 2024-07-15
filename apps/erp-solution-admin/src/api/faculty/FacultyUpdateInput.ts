import { CoursesUpdateManyWithoutFacultiesInput } from "./CoursesUpdateManyWithoutFacultiesInput";

export type FacultyUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  officeHours?: string | null;
  department?: string | null;
  coursesItems?: CoursesUpdateManyWithoutFacultiesInput;
  role?: string | null;
};
