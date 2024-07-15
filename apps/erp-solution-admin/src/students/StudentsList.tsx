import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const StudentsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StudentsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="firstName" source="firstName" />
        <TextField label="lastName" source="lastName" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="address" source="address" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="email" source="email" />
        <TextField label="enrollmentNumber" source="enrollmentNumber" />
        <TextField label="rollNumber" source="rollNumber" />
        <TextField label="registrationNumber" source="registrationNumber" />
      </Datagrid>
    </List>
  );
};
