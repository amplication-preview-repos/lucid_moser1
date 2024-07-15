import { CoursesCreateNestedManyWithoutFacultiesInput } from "./CoursesCreateNestedManyWithoutFacultiesInput";

export type FacultyCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  officeHours?: string | null;
  department?: string | null;
  coursesItems?: CoursesCreateNestedManyWithoutFacultiesInput;
  role?: string | null;
};
