import { MessagesWhereUniqueInput } from "./MessagesWhereUniqueInput";
import { MessagesUpdateInput } from "./MessagesUpdateInput";

export type UpdateMessagesArgs = {
  where: MessagesWhereUniqueInput;
  data: MessagesUpdateInput;
};
