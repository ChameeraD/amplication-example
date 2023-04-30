import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlogWhereInput = {
  author?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  publication?: StringNullableFilter;
  publishedAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
