import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FacultyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Faculties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
