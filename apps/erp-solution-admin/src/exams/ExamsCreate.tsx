import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CoursesTitle } from "../courses/CoursesTitle";

export const ExamsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="course.id" reference="Courses" label="Course">
          <SelectInput optionText={CoursesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
