import { BlogWhereInput } from "./BlogWhereInput";
import { BlogOrderByInput } from "./BlogOrderByInput";

export type BlogFindManyArgs = {
  where?: BlogWhereInput;
  orderBy?: Array<BlogOrderByInput>;
  skip?: number;
  take?: number;
};
