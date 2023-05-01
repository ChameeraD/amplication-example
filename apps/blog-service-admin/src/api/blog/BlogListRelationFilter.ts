import { BlogWhereInput } from "./BlogWhereInput";

export type BlogListRelationFilter = {
  every?: BlogWhereInput;
  some?: BlogWhereInput;
  none?: BlogWhereInput;
};
