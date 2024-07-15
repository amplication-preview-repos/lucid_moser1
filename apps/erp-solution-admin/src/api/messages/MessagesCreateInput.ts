export type MessagesCreateInput = {
  receiver?: string | null;
  messageBody?: string | null;
  timestamp?: Date | null;
  sender?: string | null;
};
