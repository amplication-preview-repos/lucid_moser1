import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ParentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="address" multiline source="address" />
      </SimpleForm>
    </Edit>
  );
};
