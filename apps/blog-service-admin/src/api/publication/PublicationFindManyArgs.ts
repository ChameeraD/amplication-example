import { PublicationWhereInput } from "./PublicationWhereInput";
import { PublicationOrderByInput } from "./PublicationOrderByInput";

export type PublicationFindManyArgs = {
  where?: PublicationWhereInput;
  orderBy?: Array<PublicationOrderByInput>;
  skip?: number;
  take?: number;
};
