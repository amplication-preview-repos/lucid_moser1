import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const LibraryResourcesCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
