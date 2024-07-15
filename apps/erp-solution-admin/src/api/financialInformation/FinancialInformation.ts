export type FinancialInformation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  hostelFee: number | null;
  paymentStatus?: "Option1" | null;
  paymentDate: Date | null;
  tuitionFee: number | null;
};
