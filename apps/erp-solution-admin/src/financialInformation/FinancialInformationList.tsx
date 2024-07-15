import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const FinancialInformationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Financial Informations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="hostelFee" source="hostelFee" />
        <TextField label="paymentStatus" source="paymentStatus" />
        <TextField label="paymentDate" source="paymentDate" />
        <TextField label="tuitionFee" source="tuitionFee" />
      </Datagrid>
    </List>
  );
};
