import { SortOrder } from "../../util/SortOrder";

export type BlogOrderByInput = {
  author?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  publication?: SortOrder;
  publishedDate?: SortOrder;
  updatedAt?: SortOrder;
};
