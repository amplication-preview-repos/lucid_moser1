import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COURSES_TITLE_FIELD } from "./CoursesTitle";
import { FACULTY_TITLE_FIELD } from "../faculty/FacultyTitle";

export const CoursesShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="courseName" source="courseName" />
        <TextField label="courseCode" source="courseCode" />
        <TextField label="description" source="description" />
        <TextField label="credits" source="credits" />
        <ReferenceField label="Faculty" source="faculty.id" reference="Faculty">
          <TextField source={FACULTY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Assignments"
          target="courseId"
          label="AssignmentsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="dueDate" source="dueDate" />
            <TextField label="title" source="title" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="Course"
              source="courses.id"
              reference="Courses"
            >
              <TextField source={COURSES_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Exams"
          target="courseId"
          label="ExamsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="description" source="description" />
            <TextField label="date" source="date" />
            <TextField label="title" source="title" />
            <ReferenceField
              label="Course"
              source="courses.id"
              reference="Courses"
            >
              <TextField source={COURSES_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
