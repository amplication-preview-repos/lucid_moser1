export type Notifications = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  timestamp: Date | null;
  message: string | null;
  recipient: string | null;
};
