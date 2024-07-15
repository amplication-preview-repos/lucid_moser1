import { FinancialInformationWhereInput } from "./FinancialInformationWhereInput";
import { FinancialInformationOrderByInput } from "./FinancialInformationOrderByInput";

export type FinancialInformationFindManyArgs = {
  where?: FinancialInformationWhereInput;
  orderBy?: Array<FinancialInformationOrderByInput>;
  skip?: number;
  take?: number;
};
