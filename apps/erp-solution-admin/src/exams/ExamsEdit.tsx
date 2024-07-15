import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CoursesTitle } from "../courses/CoursesTitle";

export const ExamsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="course.id" reference="Courses" label="Course">
          <SelectInput optionText={CoursesTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
