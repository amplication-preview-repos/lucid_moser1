import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MeetingsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="dateTime" source="dateTime" />
        <TextInput label="participants" multiline source="participants" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
