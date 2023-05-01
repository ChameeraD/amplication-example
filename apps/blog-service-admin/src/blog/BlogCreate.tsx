import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const BlogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Author" source="author" />
        <TextInput label="Content" multiline source="content" />
        <TextInput label="Publication" source="publication" />
        <DateTimeInput label="Published At" source="publishedAt" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
