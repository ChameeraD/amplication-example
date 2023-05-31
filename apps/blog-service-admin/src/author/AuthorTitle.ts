import { Author as TAuthor } from "../api/author/Author";

export const AUTHOR_TITLE_FIELD = "name";

export const AuthorTitle = (record: TAuthor): string => {
  return record.name || String(record.id);
};
