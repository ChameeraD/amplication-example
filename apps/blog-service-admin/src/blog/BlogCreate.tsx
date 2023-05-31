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
        <TextInput label="Name" source="name" />
        <TextInput label="Publication" source="publication" />
        <DateTimeInput label="Published Date" source="publishedDate" />
      </SimpleForm>
    </Create>
  );
};
