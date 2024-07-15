import { Faculty as TFaculty } from "../api/faculty/Faculty";

export const FACULTY_TITLE_FIELD = "firstName";

export const FacultyTitle = (record: TFaculty): string => {
  return record.firstName?.toString() || String(record.id);
};
