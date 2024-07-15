import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ParentsWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  address?: StringNullableFilter;
};
