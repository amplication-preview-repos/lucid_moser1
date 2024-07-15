import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const MeetingsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="dateTime" source="dateTime" />
        <TextInput label="participants" multiline source="participants" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
