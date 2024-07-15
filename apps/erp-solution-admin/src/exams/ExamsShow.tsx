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

export const ExamsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="date" source="date" />
        <TextField label="title" source="title" />
        <ReferenceField label="Course" source="courses.id" reference="Courses">
          <TextField source={COURSES_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
