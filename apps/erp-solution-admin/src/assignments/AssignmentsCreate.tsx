import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CoursesTitle } from "../courses/CoursesTitle";

export const AssignmentsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dueDate" source="dueDate" />
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="course.id" reference="Courses" label="Course">
          <SelectInput optionText={CoursesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
