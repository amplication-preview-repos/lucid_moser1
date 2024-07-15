import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const NotificationsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="message" multiline source="message" />
        <TextInput label="recipient" source="recipient" />
      </SimpleForm>
    </Edit>
  );
};
