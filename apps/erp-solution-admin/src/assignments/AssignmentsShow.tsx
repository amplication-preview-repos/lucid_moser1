import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { COURSES_TITLE_FIELD } from "../courses/CoursesTitle";

export const AssignmentsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <ReferenceField label="Course" source="courses.id" reference="Courses">
          <TextField source={COURSES_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
