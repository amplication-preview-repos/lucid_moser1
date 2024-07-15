import { ParentsWhereInput } from "./ParentsWhereInput";
import { ParentsOrderByInput } from "./ParentsOrderByInput";

export type ParentsFindManyArgs = {
  where?: ParentsWhereInput;
  orderBy?: Array<ParentsOrderByInput>;
  skip?: number;
  take?: number;
};
