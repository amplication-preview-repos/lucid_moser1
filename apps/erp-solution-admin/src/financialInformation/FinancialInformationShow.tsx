import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const FinancialInformationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="hostelFee" source="hostelFee" />
        <TextField label="paymentStatus" source="paymentStatus" />
        <TextField label="paymentDate" source="paymentDate" />
        <TextField label="tuitionFee" source="tuitionFee" />
      </SimpleShowLayout>
    </Show>
  );
};
