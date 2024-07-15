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
import { FACULTY_TITLE_FIELD } from "../faculty/FacultyTitle";

export const CoursesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CoursesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
