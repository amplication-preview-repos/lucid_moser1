import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LibraryResourcesList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Library ResourcesItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="author" source="author" />
        <TextField label="ISBN" source="isbn" />
        <TextField label="publishedDate" source="publishedDate" />
        <TextField label="title" source="title" />
        <TextField label="availableCopies" source="availableCopies" />
      </Datagrid>
    </List>
  );
};
