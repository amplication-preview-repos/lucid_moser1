import { Notifications as TNotifications } from "../api/notifications/Notifications";

export const NOTIFICATIONS_TITLE_FIELD = "recipient";

export const NotificationsTitle = (record: TNotifications): string => {
  return record.recipient?.toString() || String(record.id);
};
