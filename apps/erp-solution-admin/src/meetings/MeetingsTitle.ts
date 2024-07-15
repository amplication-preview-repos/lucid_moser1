import { Meetings as TMeetings } from "../api/meetings/Meetings";

export const MEETINGS_TITLE_FIELD = "title";

export const MeetingsTitle = (record: TMeetings): string => {
  return record.title?.toString() || String(record.id);
};
