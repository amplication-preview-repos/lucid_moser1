import { Assignments as TAssignments } from "../api/assignments/Assignments";

export const ASSIGNMENTS_TITLE_FIELD = "title";

export const AssignmentsTitle = (record: TAssignments): string => {
  return record.title?.toString() || String(record.id);
};
