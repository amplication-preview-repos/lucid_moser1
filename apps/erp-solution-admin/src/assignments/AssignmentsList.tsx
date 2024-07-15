import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COURSES_TITLE_FIELD } from "../courses/CoursesTitle";

export const AssignmentsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AssignmentsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <ReferenceField label="Course" source="courses.id" reference="Courses">
          <TextField source={COURSES_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
