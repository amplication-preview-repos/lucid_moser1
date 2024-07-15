import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const StudentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="firstName" source="firstName" />
        <TextField label="lastName" source="lastName" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="address" source="address" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="email" source="email" />
        <TextField label="enrollmentNumber" source="enrollmentNumber" />
        <TextField label="rollNumber" source="rollNumber" />
        <TextField label="registrationNumber" source="registrationNumber" />
      </SimpleShowLayout>
    </Show>
  );
};
