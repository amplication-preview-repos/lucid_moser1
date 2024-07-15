import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const FinancialInformationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
