import { ExamsWhereInput } from "./ExamsWhereInput";
import { ExamsOrderByInput } from "./ExamsOrderByInput";

export type ExamsFindManyArgs = {
  where?: ExamsWhereInput;
  orderBy?: Array<ExamsOrderByInput>;
  skip?: number;
  take?: number;
};
