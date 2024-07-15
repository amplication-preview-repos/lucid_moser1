import { MeetingsWhereInput } from "./MeetingsWhereInput";
import { MeetingsOrderByInput } from "./MeetingsOrderByInput";

export type MeetingsFindManyArgs = {
  where?: MeetingsWhereInput;
  orderBy?: Array<MeetingsOrderByInput>;
  skip?: number;
  take?: number;
};
