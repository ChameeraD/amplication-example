import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BlogWhereInput = {
  author?: DateTimeNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  publication?: StringNullableFilter;
  publishedAt?: StringNullableFilter;
  title?: StringNullableFilter;
};
