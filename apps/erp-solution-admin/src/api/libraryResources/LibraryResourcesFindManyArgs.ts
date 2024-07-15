import { LibraryResourcesWhereInput } from "./LibraryResourcesWhereInput";
import { LibraryResourcesOrderByInput } from "./LibraryResourcesOrderByInput";

export type LibraryResourcesFindManyArgs = {
  where?: LibraryResourcesWhereInput;
  orderBy?: Array<LibraryResourcesOrderByInput>;
  skip?: number;
  take?: number;
};
