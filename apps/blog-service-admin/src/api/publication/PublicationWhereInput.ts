import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PublicationWhereInput = {
  id?: StringFilter;
  link?: StringNullableFilter;
  name?: StringNullableFilter;
};
