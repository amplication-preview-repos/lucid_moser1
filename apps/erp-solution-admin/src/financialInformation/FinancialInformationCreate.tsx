import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const FinancialInformationCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="hostelFee" source="hostelFee" />
        <SelectInput
          source="paymentStatus"
          label="paymentStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="paymentDate" source="paymentDate" />
        <NumberInput label="tuitionFee" source="tuitionFee" />
      </SimpleForm>
    </Create>
  );
};
