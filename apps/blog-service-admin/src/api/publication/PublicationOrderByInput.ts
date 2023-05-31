import { SortOrder } from "../../util/SortOrder";

export type PublicationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  link?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
