import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const NotificationsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="message" multiline source="message" />
        <TextInput label="recipient" source="recipient" />
      </SimpleForm>
    </Create>
  );
};
