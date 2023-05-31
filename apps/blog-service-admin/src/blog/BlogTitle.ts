import { Blog as TBlog } from "../api/blog/Blog";

export const BLOG_TITLE_FIELD = "name";

export const BlogTitle = (record: TBlog): string => {
  return record.name || String(record.id);
};
