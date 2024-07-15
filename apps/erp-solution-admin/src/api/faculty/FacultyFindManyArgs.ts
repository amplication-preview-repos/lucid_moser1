import { FacultyWhereInput } from "./FacultyWhereInput";
import { FacultyOrderByInput } from "./FacultyOrderByInput";

export type FacultyFindManyArgs = {
  where?: FacultyWhereInput;
  orderBy?: Array<FacultyOrderByInput>;
  skip?: number;
  take?: number;
};
