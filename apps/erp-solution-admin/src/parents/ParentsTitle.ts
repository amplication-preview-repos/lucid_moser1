import { Parents as TParents } from "../api/parents/Parents";

export const PARENTS_TITLE_FIELD = "firstName";

export const ParentsTitle = (record: TParents): string => {
  return record.firstName?.toString() || String(record.id);
};
