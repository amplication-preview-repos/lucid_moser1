import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ForumPostsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="content" multiline source="content" />
        <TextInput label="author" source="author" />
        <DateTimeInput label="timestamp" source="timestamp" />
      </SimpleForm>
    </Edit>
  );
};
