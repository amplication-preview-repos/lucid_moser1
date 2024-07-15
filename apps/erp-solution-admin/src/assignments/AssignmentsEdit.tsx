import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CoursesTitle } from "../courses/CoursesTitle";

export const AssignmentsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dueDate" source="dueDate" />
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput source="course.id" reference="Courses" label="Course">
          <SelectInput optionText={CoursesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
