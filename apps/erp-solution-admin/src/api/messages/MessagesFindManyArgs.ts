import { MessagesWhereInput } from "./MessagesWhereInput";
import { MessagesOrderByInput } from "./MessagesOrderByInput";

export type MessagesFindManyArgs = {
  where?: MessagesWhereInput;
  orderBy?: Array<MessagesOrderByInput>;
  skip?: number;
  take?: number;
};
