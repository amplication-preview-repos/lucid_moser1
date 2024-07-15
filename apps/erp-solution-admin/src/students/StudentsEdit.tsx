import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const StudentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="address" multiline source="address" />
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="enrollmentNumber" source="enrollmentNumber" />
        <TextInput label="rollNumber" source="rollNumber" />
        <TextInput label="registrationNumber" source="registrationNumber" />
      </SimpleForm>
    </Edit>
  );
};
