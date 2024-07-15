export type Messages = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  receiver: string | null;
  messageBody: string | null;
  timestamp: Date | null;
  sender: string | null;
};
