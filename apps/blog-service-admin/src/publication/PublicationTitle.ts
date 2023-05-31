import { Publication as TPublication } from "../api/publication/Publication";

export const PUBLICATION_TITLE_FIELD = "name";

export const PublicationTitle = (record: TPublication): string => {
  return record.name || String(record.id);
};
