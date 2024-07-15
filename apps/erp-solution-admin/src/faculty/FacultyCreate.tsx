import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CoursesTitle } from "../courses/CoursesTitle";

export const FacultyCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="officeHours" source="officeHours" />
        <TextInput label="department" source="department" />
        <ReferenceArrayInput
          source="coursesItems"
          reference="Courses"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CoursesTitle} />
        </ReferenceArrayInput>
        <TextInput label="role" source="role" />
      </SimpleForm>
    </Create>
  );
};
