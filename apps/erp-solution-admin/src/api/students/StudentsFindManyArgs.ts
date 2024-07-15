import { StudentsWhereInput } from "./StudentsWhereInput";
import { StudentsOrderByInput } from "./StudentsOrderByInput";

export type StudentsFindManyArgs = {
  where?: StudentsWhereInput;
  orderBy?: Array<StudentsOrderByInput>;
  skip?: number;
  take?: number;
};
