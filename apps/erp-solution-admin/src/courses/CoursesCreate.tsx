import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FacultyTitle } from "../faculty/FacultyTitle";
import { AssignmentsTitle } from "../assignments/AssignmentsTitle";
import { ExamsTitle } from "../exams/ExamsTitle";

export const CoursesCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="courseName" source="courseName" />
        <TextInput label="courseCode" source="courseCode" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="credits" source="credits" />
        <ReferenceInput source="faculty.id" reference="Faculty" label="Faculty">
          <SelectInput optionText={FacultyTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="assignmentsItems"
          reference="Assignments"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AssignmentsTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="examsItems"
          reference="Exams"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ExamsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
