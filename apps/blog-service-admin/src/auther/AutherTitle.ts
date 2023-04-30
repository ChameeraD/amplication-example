import { Auther as TAuther } from "../api/auther/Auther";

export const AUTHER_TITLE_FIELD = "name";

export const AutherTitle = (record: TAuther): string => {
  return record.name || String(record.id);
};
