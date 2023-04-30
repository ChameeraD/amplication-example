import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const BlogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Author" source="author" />
        <TextInput label="Content" source="content" />
        <TextInput label="Publication" source="publication" />
        <TextInput label="Published At" source="publishedAt" />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
