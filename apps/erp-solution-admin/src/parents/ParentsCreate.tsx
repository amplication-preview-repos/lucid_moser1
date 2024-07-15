import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ParentsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="address" multiline source="address" />
      </SimpleForm>
    </Create>
  );
};
