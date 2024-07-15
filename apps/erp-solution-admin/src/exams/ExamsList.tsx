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

export const ExamsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ExamsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="date" source="date" />
        <TextField label="title" source="title" />
        <ReferenceField label="Course" source="courses.id" reference="Courses">
          <TextField source={COURSES_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
