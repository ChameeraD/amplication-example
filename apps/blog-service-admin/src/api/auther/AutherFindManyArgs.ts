import { AutherWhereInput } from "./AutherWhereInput";
import { AutherOrderByInput } from "./AutherOrderByInput";

export type AutherFindManyArgs = {
  where?: AutherWhereInput;
  orderBy?: Array<AutherOrderByInput>;
  skip?: number;
  take?: number;
};
