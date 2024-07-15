import { NotificationsWhereInput } from "./NotificationsWhereInput";
import { NotificationsOrderByInput } from "./NotificationsOrderByInput";

export type NotificationsFindManyArgs = {
  where?: NotificationsWhereInput;
  orderBy?: Array<NotificationsOrderByInput>;
  skip?: number;
  take?: number;
};
