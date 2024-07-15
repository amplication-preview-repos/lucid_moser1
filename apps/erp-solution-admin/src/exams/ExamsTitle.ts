import { Exams as TExams } from "../api/exams/Exams";

export const EXAMS_TITLE_FIELD = "title";

export const ExamsTitle = (record: TExams): string => {
  return record.title?.toString() || String(record.id);
};
