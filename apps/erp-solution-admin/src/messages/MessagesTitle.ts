import { Messages as TMessages } from "../api/messages/Messages";

export const MESSAGES_TITLE_FIELD = "receiver";

export const MessagesTitle = (record: TMessages): string => {
  return record.receiver?.toString() || String(record.id);
};
