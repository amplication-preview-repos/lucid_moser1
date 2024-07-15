import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { FACULTY_TITLE_FIELD } from "./FacultyTitle";

export const FacultyShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="firstName" source="firstName" />
        <TextField label="lastName" source="lastName" />
        <TextField label="email" source="email" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="officeHours" source="officeHours" />
        <TextField label="department" source="department" />
        <TextField label="role" source="role" />
        <ReferenceManyField
          reference="Courses"
          target="facultyId"
          label="CoursesItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="courseName" source="courseName" />
            <TextField label="courseCode" source="courseCode" />
            <TextField label="description" source="description" />
            <TextField label="credits" source="credits" />
            <ReferenceField
              label="Faculty"
              source="faculty.id"
              reference="Faculty"
            >
              <TextField source={FACULTY_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
