import { FinancialInformation as TFinancialInformation } from "../api/financialInformation/FinancialInformation";

export const FINANCIALINFORMATION_TITLE_FIELD = "id";

export const FinancialInformationTitle = (
  record: TFinancialInformation
): string => {
  return record.id?.toString() || String(record.id);
};
