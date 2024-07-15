import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type StudentsWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  address?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  enrollmentNumber?: StringNullableFilter;
  rollNumber?: StringNullableFilter;
  registrationNumber?: StringNullableFilter;
};
