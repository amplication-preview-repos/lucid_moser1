import { Students as TStudents } from "../api/students/Students";

export const STUDENTS_TITLE_FIELD = "firstName";

export const StudentsTitle = (record: TStudents): string => {
  return record.firstName?.toString() || String(record.id);
};
