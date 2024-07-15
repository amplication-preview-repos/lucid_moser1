import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MessagesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="receiver" source="receiver" />
        <TextInput label="messageBody" multiline source="messageBody" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="sender" source="sender" />
      </SimpleForm>
    </Create>
  );
};
