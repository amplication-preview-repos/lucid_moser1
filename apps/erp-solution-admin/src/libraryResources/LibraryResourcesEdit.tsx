import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const LibraryResourcesEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="author" source="author" />
        <TextInput label="ISBN" source="isbn" />
        <DateTimeInput label="publishedDate" source="publishedDate" />
        <TextInput label="title" source="title" />
        <NumberInput
          step={1}
          label="availableCopies"
          source="availableCopies"
        />
      </SimpleForm>
    </Edit>
  );
};
